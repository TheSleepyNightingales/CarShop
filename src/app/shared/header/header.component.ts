import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private AuthService: AuthService) {
  }

  logOut() {
    this.AuthService.logOut();
  }
  currentUser() {
    return this.AuthService.currentUser();
  }

  ngOnInit() {
  }
}
