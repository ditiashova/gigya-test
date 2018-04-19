import {Component, OnInit} from '@angular/core';
import {AccountService} from '../account.service';
import {RequestResult} from '../account.models';
import {AccountOptions} from '../account.models';

import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-account-options',
  templateUrl: './account-options.component.html',
  styleUrls: ['./account-options.component.scss']
})
export class AccountOptionsComponent implements OnInit {
  accountOptions: AccountOptions;
  requestResult: RequestResult;
  readonlyMode: boolean;

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.readonlyMode = this.route.snapshot.data.readonlyMode;
    this.initAccountOptions();
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
