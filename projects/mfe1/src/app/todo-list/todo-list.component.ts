import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonLibService } from 'common-lib';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {
  sub!: Subscription;

  constructor(private service: CommonLibService) { }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit() {
    this.service.commonData({ source: 'mfe1', destination: ['**'], data: 'data from mfe1' });
    this.sub = this.service.readData("mfe1").subscribe((data: any) => {
      console.log("mfe1", data)
    })
  }

  call(destination = ['**']) {
    this.service.commonData({ source: 'mfe1', destination: [...destination], data: +new Date() })
  }
}
