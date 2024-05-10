import { Component } from '@angular/core';
import { CommonLibService } from 'common-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'host-app';
  dataFromRemote: any;

  constructor(private service: CommonLibService) {
    service.commonData("data from lib");
    service.readData().subscribe((data: any) => {
      console.log("host " + data)
    })
  }

  call() {
    this.service.commonData(+new Date())
  }
}

