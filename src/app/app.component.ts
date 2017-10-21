import {Component, OnInit} from '@angular/core';
import {Route, Router} from '@angular/router';

import {TodoDataService} from './todo-data.service';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  comment_logs: any[] = [];

  constructor(
    private _todoDataService: TodoDataService,
    private _router: Router,
  ) {}

  ngOnInit() {
    this.comment_logs = this._todoDataService.getAllCommentLogs();
  }

  search(keyword: string) {
    if (keyword.trim()) {
      this._router.navigate(['/search', keyword]);
    }
  }
}
