import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public userService: UserService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  login() {
    this.userService.getUser(this.loginForm.value.email).subscribe((res) => {
      console.log(res);
      if (res?.length == 0) {
        this.snackbar.open('Böyle bir kullanici yok', 'Ok');
      }
    });
  }
}
