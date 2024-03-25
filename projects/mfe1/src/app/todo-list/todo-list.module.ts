import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild([{
      path: '', component: TodoListComponent
    }])
  ],
  declarations: [TodoListComponent]
})
export class TodoListModule { }
