import { Component, OnInit, Input } from '@angular/core';
import {Todo} from '../../todo';
import {TodoDataService} from '../../todo-data.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  @Input() todo: Todo;

  constructor(private todoDataService: TodoDataService) { }

  ngOnInit() {
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteById(todo.id);
  }
}
