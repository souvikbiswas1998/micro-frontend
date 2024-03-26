import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: "full" },
  { path: "home", component: HomeComponent },
  {
    path: "mfe1", loadChildren: () => loadRemoteModule({
      remoteEntry: "http://localhost:4201/remoteEntry.js",
      remoteName: "mfe1", exposedModule: "./AppModule"
    }).then((m) => m.AppModule).catch((error) => console.error(error))
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
