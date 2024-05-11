import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, LocalAppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListModule } from './todo-list/todo-list.module';
// import { CommonLibModule } from 'common-lib';
// import { CommonLibModule, CommonLibService } from 'common-lib';
// import { CommonLibModule } from 'common-lib';

let RoutingModule = [];
if (window.location.host == 'localhost:4201') {
  RoutingModule.push(LocalAppRoutingModule)
} else RoutingModule.push(AppRoutingModule);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoListModule,
    // CommonLibModule.forRoot({ userName: 'Souvik Anu' }),
    // CommonLibModule,
    ...RoutingModule
    // RouterModule.forChild([{
    //   path: '', component: AppComponent
    // }])
  ],
  // providers: [{ provide: CommonLibService, useValue: { userName: 'Souvik Anu' } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
