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
    this.service.commonData("data from mfe1");
    this.sub = this.service.readData().subscribe((data: any) => {
      console.log(data)
    })
  }

  call() {
    this.service.commonData(+new Date())
  }


}
