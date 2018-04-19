import {Component, OnInit, Input} from '@angular/core';
import {AccountOptions} from '../../account.models';

@Component({
  selector: 'app-account-options-form',
  templateUrl: './account-options-form.component.html',
  styleUrls: ['./account-options-form.component.scss']
})
export class AccountOptionsFormComponent implements OnInit {
  @Input() options: AccountOptions;
  @Input() readonly: boolean;
  loginIdentifierConflictsList = ['ignore', 'failOnSiteConflictingIdentity', 'failOnAnyConflictingIdentity'];

  constructor() {
  }

  ngOnInit() {
  }

}
