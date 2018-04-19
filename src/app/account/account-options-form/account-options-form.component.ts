import { Component, OnInit, Input } from '@angular/core';
import {AccountOptions, AccountOptionsLabels} from '../account.models';

@Component({
  selector: 'app-account-options-form',
  templateUrl: './account-options-form.component.html',
  styleUrls: ['./account-options-form.component.scss']
})
export class AccountOptionsFormComponent implements OnInit {
  @Input() options: AccountOptions;
  @Input() labels: AccountOptionsLabels;
  @Input() conflictsList: Array<string>;
  @Input() readonly: boolean;

  constructor() { }

  ngOnInit() {
  }

}
