import { NgModule } from '@angular/core';
import { CreateCallupComponent } from "./create-callup/create-callup.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
  	CreateCallupComponent
  ],
  exports: [
  	CreateCallupComponent
  ],
  imports: [
  	NgbModule,FormsModule,CommonModule
  ],
  providers: []
})
export class CallupsModule { }
