import {Component, Input, OnInit} from '@angular/core';
import {RequestResult} from '../account/account.models';

const STATUS_CODE = 'Status Code';
const ERROR_MESSAGE = 'Error Message';

@Component({
  selector: 'app-response-card',
  templateUrl: './response-card.component.html',
  styleUrls: ['./response-card.component.scss']
})
export class ResponseCardComponent implements OnInit {
  @Input() response: RequestResult;

  protected statusCode = STATUS_CODE;
  protected errorMessage = ERROR_MESSAGE;

  constructor() { }

  ngOnInit() {
  }

}
