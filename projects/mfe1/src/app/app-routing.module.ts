import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: '', redirectTo: '/mfe1', pathMatch: "full" },
  { path: '', component: AppComponent },

  {
    path: "mfe1", loadChildren: () =>
      import('./todo-list/todo-list.module').then((m) => m.TodoListModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LocalAppRoutingModule { }
