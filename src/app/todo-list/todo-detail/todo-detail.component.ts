import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Todo} from '../../todo';
import {Observable} from 'rxjs/Observable';
import {TodoDataService} from '../../todo-data.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  _todo: Todo;
  constructor(
    private _route: ActivatedRoute,
    private _todoDataService: TodoDataService
  ) { }

  ngOnInit(): void {
    // this._todo$ = this._todoDataService.getDetailById(this._route.snapshot.params['todo_id']);
    this._todo = this._route.snapshot.data['todo_item'];
  }

}
