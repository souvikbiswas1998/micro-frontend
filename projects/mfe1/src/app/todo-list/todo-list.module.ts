import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
// import { BrowserModule } from '@angular/platform-browser';
import { TodoListRoutingModule } from './todo-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    // BrowserModule,
    TodoListRoutingModule,
  ],
  declarations: [TodoListComponent],
  exports: [TodoListComponent]
})
export class TodoListModule { }
