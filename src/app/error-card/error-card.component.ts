import {Component, Input, OnInit} from '@angular/core';
import {RequestResult} from '../account/account.models';

@Component({
  selector: 'app-error-card',
  templateUrl: './error-card.component.html',
  styleUrls: ['./error-card.component.scss']
})
export class ErrorCardComponent implements OnInit {
  @Input() response: RequestResult;
  @Input() title: string;

  constructor() {
  }

  ngOnInit() {
  }

}
