import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  title = "List of Tasks";

  data = [
    "Add bootstrap theme",
    "Create an angular component",
    "Delete an existing component",
    "Display todo list from a static variable"
  ];

  // data = "Display todo list for static variable";

  constructor() { }

  ngOnInit() {
  }

  addTask(task: string){
    this.data.push(task);
    // alert("Success");
  }
}
