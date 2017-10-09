import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import {TodoDataService} from '../todo-data.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TodoListResolver implements Resolve<any> {
  constructor(
    private _todoDataService: TodoDataService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any[]> {
    return this._todoDataService.initialAllTodos();
  }
}
