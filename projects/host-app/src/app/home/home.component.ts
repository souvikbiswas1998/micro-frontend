import { Component, OnInit } from '@angular/core';
import { CommonLibService } from 'common-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: CommonLibService) {
    service.commonData("data from lib")
  }


  ngOnInit() {
   
  }

}
