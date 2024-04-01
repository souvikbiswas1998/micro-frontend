import { Component, OnInit } from '@angular/core';
import { CommonLibService } from 'common-lib';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private service: CommonLibService) {
    service.readData().subscribe((data)=>{
      console.log(data)
    })
  }

  ngOnInit() {
  }

}
