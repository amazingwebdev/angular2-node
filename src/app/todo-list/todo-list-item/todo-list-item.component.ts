import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Todo} from '../../todo';
import {TodoDataService} from '../../todo-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deletedTodo = new EventEmitter<boolean>();

  constructor(
    private todoDataService: TodoDataService,
    private _router: Router) { }

  ngOnInit() {
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteById(todo._id).subscribe(res => {
      this.deletedTodo.emit(res.json());
    });
  }

  addLog(title: String, log: String) {
    this.todoDataService.addLog(title, log);
  }
}
