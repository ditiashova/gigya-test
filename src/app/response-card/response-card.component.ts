import {Component, Input, OnInit} from '@angular/core';
import {RequestResult} from '../account/account.models';

@Component({
  selector: 'app-response-card',
  templateUrl: './response-card.component.html',
  styleUrls: ['./response-card.component.scss']
})
export class ResponseCardComponent implements OnInit {
  @Input() response: RequestResult;

  constructor() {
  }

  ngOnInit() {
  }

}
