import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {AccountService} from './account/account.service';
import {AccountOptionsComponent} from './account/account-options/account-options.component';
import {AccountOptionsFormComponent} from './account/account-options/account-options-form/account-options-form.component';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {ErrorCardComponent} from './error-card/error-card.component';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    AccountOptionsComponent,
    AccountOptionsFormComponent,
    ErrorCardComponent
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
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
