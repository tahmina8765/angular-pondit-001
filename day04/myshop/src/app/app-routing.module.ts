import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/shared/pages/home/home.component';
import { AboutComponent } from './modules/shared/pages/about/about.component';
import { ContactComponent } from './modules/shared/pages/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'todo',
    loadChildren: () => import('./modules/todo/todo.module').then(mod => mod.TodoModule)
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
