import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonLibModule } from 'common-lib';
// import { CommonLibModule, CommonLibService } from 'common-lib';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonLibModule
  ],
  // providers: [{ provide: CommonLibService, useValue: { userName: 'Souvik Anu' } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
