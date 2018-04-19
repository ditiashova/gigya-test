import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {BrowserStandardEncoder} from './core.utils';

const USER_KEY = 'AJA3Cw9XcJZf';
const USER_SECRET = '1J+YxAY47khnuXf4GKSggLpPFBbQv8Hq';
const API_KEY = '3_inujb44QPskKBok5VwhYnqy40eaVrwAJXXLsqaHRI_6DCM3KHhxNXjjcFQe0PASK';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authParams = new HttpParams({
      encoder: new BrowserStandardEncoder() // Fix for https://github.com/angular/angular/issues/18884
    })
      .set('secret', USER_SECRET)
      .set('apikey', API_KEY)
      .set('userkey', USER_KEY);

    return next.handle(request.clone({params: authParams}));
  }
}
