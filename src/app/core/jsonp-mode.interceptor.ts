import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {JSONP_CALLBACK_NAME} from './core.constants';

@Injectable()
export class JsonpModeInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authParams = request.params
      .set('format', 'jsonp')
      .set('callback', JSONP_CALLBACK_NAME);

    return next.handle(request.clone({params: authParams}));
  }
}
