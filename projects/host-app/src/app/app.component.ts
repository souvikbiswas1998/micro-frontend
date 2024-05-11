import { Component, OnDestroy } from '@angular/core';
import { CommonLibService } from 'common-lib';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'host-app';
  dataFromRemote: any;
  sub!: Subscription;

  constructor(private service: CommonLibService) {
    service.commonData("data from lib");
    this.sub = service.readData().subscribe((data: any) => {
      console.log("host", data)
    })
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  call() {
    this.service.commonData(+new Date())
  }
}

