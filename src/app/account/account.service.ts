import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Account } from './account.models';
import { AccountOptions } from './account.models';
import { RequestResult } from './account.models';
import 'rxjs/add/operator/map';

@Injectable()
export class AccountService {
  accountPoliciesUrl = 'https://accounts.gigya.com/accounts';

  constructor(
    private http: HttpClient
  ) { }

  getAccountOptions(): Observable<AccountOptions> {

    const url = `${this.accountPoliciesUrl}.getPolicies?format=jsonp&callback=JSONP_CALLBACK`;
    return this.http.jsonp<Account>(url, 'JSONP_CALLBACK')
      .map(account => account.accountOptions);

      /*.pipe(
        catchError(this.handleError('getHeroes', []))
      );*/
  }

  setAccountOptions(data: AccountOptions): Observable<RequestResult> {
    const setAccountPoliciesUrl = 'https://accounts.gigya.com/accounts.setPolicies?userkey=AJA3Cw9XcJZf&secret=1J%2BYxAY47khnuXf4GKSggLpPFBbQv8Hq&apikey=3_inujb44QPskKBok5VwhYnqy40eaVrwAJXXLsqaHRI_6DCM3KHhxNXjjcFQe0PASK&accountOptions=%7BsendWelcomeEmail%3Atrue%7D&format=jsonp&callback=JSONP_CALLBACK';
    return this.http.jsonp<RequestResult>(setAccountPoliciesUrl, 'JSONP_CALLBACK');
  }
}
