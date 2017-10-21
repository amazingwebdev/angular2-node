import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { UserDataService } from '../user-data.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  passwordConfirmControl = new FormControl('', [Validators.required,  Validators.minLength(8)]);
  successMessage = '';
  failMessage = '';

  constructor(
    private _builder: FormBuilder,
    private _router: Router,
    private _userDataService: UserDataService,
  ) { }

  signupForm = this._builder.group({
    email: this.emailControl,
    password: this.passwordControl,
    passwordConfirm: this.passwordConfirmControl
  });

  ngOnInit() {
    this.successMessage = '';
    this.failMessage = '';
  }

  signup() {
    if (this.signupForm.value.password !== this.signupForm.value.passwordConfirm) {
      this.failMessage = 'Please rennter your password!';
      this.signupForm.reset();
    } else {
      const user: User = {
        email: this.signupForm.value.email,
        password: this.signupForm.value.password
      };
      this._userDataService.addUser(user).subscribe(
        res => {
          this.failMessage = '';
          this.successMessage = 'Registered Successfully!';
          setTimeout(() => this._router.navigate(['/auth']), 3000);
        },
        err => {
          console.log(err);
        }
      );
    }
  }

}
