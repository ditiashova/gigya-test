import {Component, OnInit} from '@angular/core';
import { AccountService } from './account.service';
import {Account, AccountOptionsLabels} from './account.models';
import { RequestResult } from './account.models';
import { AccountOptions } from './account.models';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  accountOptions: AccountOptions;
  requestResult: RequestResult;
  loginIdentifierConflictsList = ['ignore', 'failOnSiteConflictingIdentity', 'failOnAnyConflictingIdentity'];
  accountOptionsLabels: AccountOptionsLabels;
  // loginIdentifiersList = ['email', 'username', 'providerEmail'];

  constructor(
    private accountService: AccountService
  ) {  }

  ngOnInit() {
      this.initAccountOptions();
      this.accountOptionsLabels = new AccountOptionsLabels();
  }

  initAccountOptions() {
    this.accountService.getAccountOptions()
      .subscribe((data: AccountOptions) => {
        this.accountOptions = data;
    });
  }

  setAccountOptions(): void {
    this.accountService.setAccountOptions(this.accountOptions)
      .subscribe((response: RequestResult) => {
        this.requestResult = response;
      });
  }

}
