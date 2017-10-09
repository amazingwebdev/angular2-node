import { Injectable } from '@angular/core';
import {Router, ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {TodoDataService} from '../todo-data.service';
import {Todo} from '../todo';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TodoDetailResolver implements Resolve<any> {
  constructor(
    private _todoDataService: TodoDataService,
    private _http: Http
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    const todo_id = route.params['todo_id'];
    return this._todoDataService.getDetailById(todo_id);
  }
}
