import {Component, Input, OnInit} from '@angular/core';
import {AccountLabels, RequestResult} from '../account/account.models';

@Component({
  selector: 'app-response-card',
  templateUrl: './response-card.component.html',
  styleUrls: ['./response-card.component.scss']
})
export class ResponseCardComponent implements OnInit {
  @Input() response: RequestResult;
  @Input() labels: AccountLabels;

  constructor() {
  }

  ngOnInit() {
  }

}
