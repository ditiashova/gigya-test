import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Account} from './account.models';
import {AccountOptions} from './account.models';
import {RequestResult} from './account.models';
import 'rxjs/add/operator/map';
import {JSONP_CALLBACK_NAME} from '../core/core.constants';

const ACCOUNTS_ENDPOINT = 'https://accounts.gigya.com/accounts';

@Injectable()
export class AccountService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAccountOptions(): Observable<AccountOptions> {
    const url = `${ACCOUNTS_ENDPOINT}.getPolicies`;
    return this.http.jsonp<Account>(url, JSONP_CALLBACK_NAME)
      .map(account => account.accountOptions);
  }

  setAccountOptions(data: AccountOptions): Observable<RequestResult> {
    const setAccountPoliciesUrl = `${ACCOUNTS_ENDPOINT}.setPolicies?accountOptions=${encodeURIComponent(JSON.stringify(data))}`;
    return this.http.jsonp<RequestResult>(setAccountPoliciesUrl, JSONP_CALLBACK_NAME);
  }
}
