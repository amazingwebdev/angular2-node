import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../environments/environment';
import { User } from './user';

@Injectable()
export class UserDataService {

  constructor(
    private _http: Http,
  ) { }

  addUser(user: User): Observable<User> {
    return this._http.post(environment.static_url + '/user', user)
      .map(res => res.json());
  }

  loginUser(user: User): Observable<User> {
    return this._http.get(environment.static_url + `/user/${user.email + '/' + user.password}`)
      .map(res => res.json());
  }
}
