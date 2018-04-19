import {inject, TestBed} from '@angular/core/testing';
import {AccountService} from './account.service';
import {HttpClient} from '@angular/common/http';
import {Account} from './account.models';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let httpClientSpy: {jsonp: jasmine.Spy};

const testAccount: Account = {
  accountOptions: {
    allowUnverifiedLogin: true,
    defaultLanguage: "ru",
    loginIdentifierConflict: "123",
    loginIdentifiers: "456",
    preventLoginIDHarvesting: false,
    sendAccountDeletedEmail: true,
    sendWelcomeEmail: false,
    verifyEmail: false,
    verifyProviderEmail: true
  }
};

describe('AccountService', () => {
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['jsonp']);

    TestBed.configureTestingModule({
      providers: [
        AccountService,
        {provide: HttpClient, useValue: httpClientSpy}
      ]
    });
  });

  describe('getAccountOptions', () => {
    it('should return options of account fetched from api', inject([AccountService], (service: AccountService) => {
      httpClientSpy.jsonp.and.returnValue(Observable.of(testAccount));

      service.getAccountOptions().subscribe(
        accountOptions => expect(accountOptions).toEqual(testAccount.accountOptions),
        fail
      )
    }));
  });

  describe('setAccountOptions', () => {
    it('should call api with specified options as query string parameter',
      inject([AccountService], (service: AccountService) => {

      service.setAccountOptions(testAccount.accountOptions);

      expect(httpClientSpy.jsonp.calls.mostRecent().args[0])
        .toContain(`accountOptions=${encodeURIComponent(JSON.stringify(testAccount.accountOptions))}`);
    }));

    it('should call api with specified options as query string parameter',
      inject([AccountService], (service: AccountService) => {

        service.setAccountOptions(testAccount.accountOptions);

        expect(httpClientSpy.jsonp.calls.mostRecent().args[0])
          .toContain(`accountOptions=${encodeURIComponent(JSON.stringify(testAccount.accountOptions))}`);
      }));
  });
});
