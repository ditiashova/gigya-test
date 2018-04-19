import {NgModule} from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule } from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule
  ]
})

export class MaterialModule { }
