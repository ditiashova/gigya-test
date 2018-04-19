import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {BrowserStandardEncoder} from './core.utils';

const FORMAT = 'jsonp';
const CALLBACK = 'JSONP_CALLBACK';

@Injectable()
export class JsonpModeInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authParams = request.params
      .set('format', FORMAT)
      .set('callback', CALLBACK);

    return next.handle(request.clone({params: authParams}));
  }
}
