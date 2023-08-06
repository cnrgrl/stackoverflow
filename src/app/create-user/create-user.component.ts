import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  createUserForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    userName: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(10)],
    ],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  get f(): { [key: string]: AbstractControl } {
    return this.createUserForm.controls;
  }
}
