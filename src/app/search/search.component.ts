import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../todo';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchList: Todo[] = [];
  keyword = '';

  constructor(
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.searchList = this._route.snapshot.data.search_results;
    this.keyword = this._route.snapshot.params.keyword;
  }
}
