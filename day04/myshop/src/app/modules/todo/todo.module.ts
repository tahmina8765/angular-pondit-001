import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { TodoDetailsComponent } from './pages/todo-details/todo-details.component';

@NgModule({
  declarations: [TodoListComponent, TodoDetailsComponent],
  imports: [
    CommonModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
