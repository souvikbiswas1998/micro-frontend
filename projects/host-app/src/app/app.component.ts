import { Component } from '@angular/core';
import { CommonLibService } from '../../../common-lib/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'host-app';
  dataFromRemote: any;

  constructor(service: CommonLibService) {
    service.commonData("data from lib")
  }
}

