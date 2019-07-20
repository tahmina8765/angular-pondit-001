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

  detailsTask = {};

  tasklist = [
    {
      id: 1,
      name: "Add bootstrap theme",
      description: "Task description 1",
      status: true
    },
    {
      id: 2,
      name: "Display todo list from a static variable",
      description: "Task description 2",
      status: false
    },
    {
      id: 3,
      name: "Delete an existing component",
      description: "Task description 3",
      status: false
    },
    {
      id: 4,
      name: "Create an angular component",
      description: "Task description 4",
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

  viewDetails(task){
    this.detailsTask = task;
  }
}
