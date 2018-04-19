import {AccountOptionsComponent} from './account-options.component';
import {AccountService} from '../account.service';
import {Observable} from 'rxjs/Observable';

describe('AccountOptionsComponent', () => {
  let component: AccountOptionsComponent;
  let accountServiceSpy;

  const activatedRouteMock = (readonlyMode) => ({
    snapshot: {
      data: {
        readonlyMode
      }
    }
  }) as any;

  beforeEach(() => {
    accountServiceSpy = jasmine.createSpyObj('AccountService', ['getAccountOptions']);
  });

  it('should set readonlyMode to true if route data field readonlyMode is true', () => {
    accountServiceSpy.getAccountOptions.and.returnValue(Observable.of());
    component = new AccountOptionsComponent(accountServiceSpy, activatedRouteMock(true));

    component.ngOnInit();

    expect(component.readonlyMode).toBeTruthy();
  });

  it('should set readonlyMode to false if route data field readonlyMode is false', () => {
    accountServiceSpy.getAccountOptions.and.returnValue(Observable.of());
    component = new AccountOptionsComponent(accountServiceSpy, activatedRouteMock(false));

    component.ngOnInit();

    expect(component.readonlyMode).toBeFalsy();
  });
});
