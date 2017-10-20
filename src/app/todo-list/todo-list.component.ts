import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../todo-data.service';
import {Todo} from '../todo';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  newTodo: Todo = new Todo();
  todo_list: any[];

  constructor(
    private todoDataService: TodoDataService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.todo_list = this._route.snapshot.data['todo_list'];
  }

  addTodo() {
    if (this.newTodo.title.trim() === '') {
      alert('Please input any title.');
      return;
    }
    // this.newTodo.id = this.todo_list.length;
    this.todoDataService.addTodo(this.newTodo)
      .subscribe(res => {
        this.todo_list.push(res.json());
      },
      err => {
        alert(err.message);
      });
    this.newTodo = new Todo();
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

  onDelete(deletedTodo: Todo) {
    const index = this.todo_list.findIndex(todo => todo._id === deletedTodo._id);
    this.todo_list.splice(index, 1);
  }
}
