import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {AccountComponent} from './account/account.component';
import {AccountService} from './account/account.service';
import {MaterialModule} from './material.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthInterceptor} from './core/auth.interceptor';
import {CoreModule} from './core/core.module';
import { AccountOptionsFormComponent } from './account/account-options-form/account-options-form.component';
import { ResponseCardComponent } from './response-card/response-card.component';
import { AppRoutingModule } from './/app-routing.module';
import { CodePreviewComponent } from './code-preview/code-preview.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AccountOptionsFormComponent,
    ResponseCardComponent,
    CodePreviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
