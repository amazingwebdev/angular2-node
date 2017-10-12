import {Component, OnInit} from '@angular/core';
import {NgbButtonLabel} from '@ng-bootstrap/ng-bootstrap/buttons/label';
import {TodoDataService} from './todo-data.service';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  comment_logs: any[] = [];

  constructor(
    private _todoDataService: TodoDataService
  ) {}

  ngOnInit() {
    this.comment_logs = this._todoDataService.getAllCommentLogs();
  }

}
