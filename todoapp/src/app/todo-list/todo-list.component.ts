import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {


  title = "List of Tasks";
  // data = [
  //   "Add bootstrap theme",
  //   "Display todo list from a static variable",
  // ];

  tasklist = [
    {
      id: 1,
      name: "Add bootstrap theme",
      status: true
    },
    {
      id: 2,
      name: "Display todo list from a static variable",
      status: true
    },
    {
      id: 3,
      name: "Delete an existing component",
      status: true
    },
    {
      id: 4,
      name: "Create an angular component",
      status: true
    }
  ];

  // data = "Display todo list for static variable";

  constructor() { }

  ngOnInit() {

  }

  addTask(task: string){
    // this.data.push(task);
    // alert("Success");
  }
}
