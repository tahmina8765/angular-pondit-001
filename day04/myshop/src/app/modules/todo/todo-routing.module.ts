import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { TodoDetailsComponent } from './pages/todo-details/todo-details.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent
  },
  {
    path: 'details',
    component: TodoDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
