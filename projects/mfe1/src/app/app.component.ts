import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mfe1';
  dataFromRemote: any;

  constructor() {
    loadRemoteModule({
      remoteEntry: 'http://localhost:4300/remoteEntry.js',
      remoteName: 'commonService', exposedModule: "./SharedService"
      // Name from remotes in host's webpack.config.js
    }).then(async m => {
      const shared = new m.SharedService();
      this.dataFromRemote = shared.sharedData(); // Call service methods
    })

  }
}
