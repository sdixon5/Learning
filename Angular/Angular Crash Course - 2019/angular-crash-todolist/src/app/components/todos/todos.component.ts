import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  //todoService:TodoService is binding our todoService, which we can call whatever, to the TdodService
  constructor(private todoService:TodoService) { }

  ngOnInit() {
    //instead of having this below, he is going to use a service, json placeholder
    // this.todos = [
    //   {
    //     id: 1,
    //     title: 'Todo One',
    //     completed: true
    //   },
    //   {
    //     id: 2,
    //     title: 'Todo Two',
    //     completed: true
    //   },
    //   {
    //     id: 3,
    //     title: 'Todo Three',
    //     completed: false
    //   }
    // ]

    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

}
