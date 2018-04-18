import {Component, OnInit} from '@angular/core';
import { AccountService } from './account.service';
import { Account } from './account';
import { Response } from './response';
import { AccountOptions } from './account-options';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  accountOptions: AccountOptions;
  response: Response;
  loginIdentifierConflictsList = ['ignore', 'failOnSiteConflictingIdentity', 'failOnAnyConflictingIdentity'];
  // loginIdentifiersList = ['email', 'username', 'providerEmail'];

  constructor(
    private accountService: AccountService
  ) {
    this.response = null;
  }

  ngOnInit() {
      this.getAccountOptions();
  }

  getAccountOptions() {
    this.accountService.getAccountOptions()
      .subscribe((data: Account) => {
        this.accountOptions = data.accountOptions;
    });
  }

  setAccountOptions(): void {
    this.accountService.setAccountOptions(this.accountOptions)
      .subscribe((response: Response) => {
        this.response = response;
      });
  }

}
