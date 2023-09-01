import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HearderComponent implements OnInit {
  logout() {
    this.userService.user = undefined;
    this.router.navigateByUrl('/login');
  }
  constructor(public userService: UserService, private router: Router) {}

  ngOnInit(): void {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      this.userService.user = JSON.parse(userStr);
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
