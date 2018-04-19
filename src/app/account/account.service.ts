import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
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
  }

  setAccountOptions(data: AccountOptions): Observable<RequestResult> {
    const setAccountPoliciesUrl = `${this.accountPoliciesUrl}.setPolicies?accountOptions=${encodeURIComponent(JSON.stringify(data))}&format=jsonp&callback=JSONP_CALLBACK`;
    return this.http.jsonp<RequestResult>(setAccountPoliciesUrl, 'JSONP_CALLBACK');
  }
}
