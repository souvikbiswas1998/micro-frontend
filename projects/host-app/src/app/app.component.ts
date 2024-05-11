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
    service.commonData({ source: 'host', destination: 'host', data: 'host test data' });
    this.sub = service.readData('host').subscribe((data: any) => {
      console.log("host", data)
    })
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  call(destination = '**') {
    this.service.commonData({ source: 'host', destination: destination, data: +new Date() })
  }
}

