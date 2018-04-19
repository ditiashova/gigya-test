import {Component, OnInit} from '@angular/core';
import {AccountService} from './account.service';
import {AccountLabels, AccountOptionsLabels} from './account.models';
import {RequestResult} from './account.models';
import {AccountOptions} from './account.models';

import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  accountLabels: AccountLabels;
  accountOptionsLabels: AccountOptionsLabels;

  accountOptions: AccountOptions;
  requestResult: RequestResult;
  loginIdentifierConflictsList = ['ignore', 'failOnSiteConflictingIdentity', 'failOnAnyConflictingIdentity'];
  readonlyMode: boolean;

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.readonlyMode = this.route.snapshot.data.readonlyMode;
    this.initAccountOptions();
    this.accountLabels = new AccountLabels();
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
