import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountOptionsComponent} from './account/account-options/account-options.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: AccountOptionsComponent, data: {readonlyMode: false}},
  {path: 'readonly', component: AccountOptionsComponent, data: {readonlyMode: true}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
