import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {URIEncoder} from './core.utils';
import {USER_KEY, USER_SECRET, API_KEY} from './core.constants';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authParams = new HttpParams({
      encoder: new URIEncoder() // Fix for https://github.com/angular/angular/issues/18884
    })
      .set('secret', USER_SECRET)
      .set('apikey', API_KEY)
      .set('userkey', USER_KEY);

    return next.handle(request.clone({params: authParams}));
  }
}
