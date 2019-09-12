import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos() {
    //hard coding is not ideal, we want to fetch the data from a backend api, such as json placeholder!
    return [
      {
        id: 1,
        title: 'Todo 1',
        completed: true
      },
      {
        id: 2,
        title: 'Todo Two',
        completed: true
      },
      {
        id: 3,
        title: 'Todo Three',
        completed: false
      }
    ]
  }
}
