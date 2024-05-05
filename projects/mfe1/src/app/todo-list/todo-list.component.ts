import { Component, OnInit } from '@angular/core';
import { CommonLibService } from '../../../../common-lib/src/public-api';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private service: CommonLibService) { }
  ngOnInit() {
    this.service.commonData("data from mfe1");
    this.service.readData().subscribe((data: any) => {
      console.log(data)
    })
  }

}
