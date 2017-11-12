import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { APP_CONFIG, GLOBAL_APP_CONFIG } from './app.config';
import { CallupsModule } from './callups/callups.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CallupsModule,
    NgbModule.forRoot()
  ],
  providers: [{ provide: APP_CONFIG, useValue: GLOBAL_APP_CONFIG}],
  bootstrap: [AppComponent]
})
export class AppModule { }
