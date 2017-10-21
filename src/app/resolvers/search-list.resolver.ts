import { Injectable } from '@angular/core';
import {Router, ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {TodoDataService} from '../todo-data.service';
import {Todo} from '../todo';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SearchListResolver implements Resolve<any> {
  constructor(
    private _todoDataService: TodoDataService,
    private _http: Http
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    const keyword = route.params['keyword'];
    return this._todoDataService.getSearchList(keyword);
  }
}
