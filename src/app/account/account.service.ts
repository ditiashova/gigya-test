import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Account } from './account';
import { AccountOptions } from './account-options';
import { Response } from './response';

@Injectable()
export class AccountService {

  private accountPoliciesUrl = `https://accounts.gigya.com/accounts.getPolicies?userkey=AJA3Cw9XcJZf&secret=1J%2BYxAY47khnuXf4GKSggLpPFBbQv8Hq&apikey=3_inujb44QPskKBok5VwhYnqy40eaVrwAJXXLsqaHRI_6DCM3KHhxNXjjcFQe0PASK&format=jsonp&callback=JSONP_CALLBACK`;

  constructor(
    private http: HttpClient
  ) { }

  getAccountOptions(): Observable<Account> {
    return this.http.jsonp<Account>(this.accountPoliciesUrl, 'JSONP_CALLBACK');
      /*.pipe(
        catchError(this.handleError('getHeroes', []))
      );*/
  }

  setAccountOptions(data: AccountOptions): Observable<Response> {
    const setAccountPoliciesUrl = 'https://accounts.gigya.com/accounts.setPolicies?userkey=AJA3Cw9XcJZf&secret=1J%2BYxAY47khnuXf4GKSggLpPFBbQv8Hq&apikey=3_inujb44QPskKBok5VwhYnqy40eaVrwAJXXLsqaHRI_6DCM3KHhxNXjjcFQe0PASK&accountOptions=%7BsendWelcomeEmail%3Atrue%7D&format=jsonp&callback=JSONP_CALLBACK';
    return this.http.jsonp<Response>(setAccountPoliciesUrl, 'JSONP_CALLBACK');
  }

  /*private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }*/

}
