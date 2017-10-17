import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  email: any = [];
  password = '';
  passwordConfirm = '';
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  passwordConfirmControl = new FormControl('', [Validators.required,  Validators.minLength(8)]);

  constructor(
    private _builder: FormBuilder,
    private _router: Router,
  ) { }

  loginForm = this._builder.group({
    emailVar: this.emailControl,
    passwordVar: this.passwordControl,
    passwordConfirmVar: this.passwordConfirmControl
  });

  ngOnInit() {
  }

  login() {
    if (this.password !== this.passwordConfirm) {
      alert('Please reenter your password!');
      this.password = '';
      this.passwordConfirm = '';
    } else {
      this._router.navigate(['/guide']);
    }
  }

}
