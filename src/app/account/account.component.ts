import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { Account } from './account';
import { AccountOptions } from './account-options';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  accountOptions: AccountOptions;

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.getAccountOptions();
  }

  getAccountOptions(): void {
    this.accountService.getAccountOptions()
      .subscribe((data: Account) => {
        this.accountOptions = data.accountOptions;
    });
    // this.accountOptions = this.accountService.getAccountOptions();
  }

}
