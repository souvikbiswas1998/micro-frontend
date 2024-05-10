import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// import { LocalAppModule } from './app/local-app.module';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

if (environment.production) {
    enableProdMode();
}

console.log(window.location.host);

// if (window.location.host !== 'localhost:4201')
platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
// else
//     platformBrowserDynamic().bootstrapModule(LocalAppModule)
//         .catch(err => console.error(err));