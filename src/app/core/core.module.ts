import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {AuthInterceptor} from './auth.interceptor';
import {JsonpModeInterceptor} from './jsonp-mode.interceptor';

@NgModule({
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JsonpModeInterceptor, multi: true},
  ],

})
export class CoreModule {
}
