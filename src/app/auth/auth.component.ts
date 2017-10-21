import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import {UserDataService} from '../user-data.service';
import { User } from '../user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(6)]);
  successMessage = '';
  failMessage = '';

  constructor(
    private _builder: FormBuilder,
    private _router: Router,
    private _userDataService: UserDataService,
  ) { }

  loginForm = this._builder.group({
    email: this.emailControl,
    password: this.passwordControl
  });

  ngOnInit() {
    this.successMessage = '';
    this.failMessage = '';
  }

  login() {
    const user: User = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    this._userDataService.loginUser(user).subscribe(
      res => {
        this.failMessage = '';
        this.successMessage = 'Login Successfully!';
        setTimeout(() => this._router.navigate(['/guide']), 3000);
      },
      err => {
        this.loginForm.reset();
        this.successMessage = '';
        this.failMessage = 'Login Failed';
      }
    );
  }
}
