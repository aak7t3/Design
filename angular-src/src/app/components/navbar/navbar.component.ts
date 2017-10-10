import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn:any;

  constructor(
    private router:Router,
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.loggedIn = this.authService.loggedIn();
    console.log(this.loggedIn);
  }

  onLogout(){
    this.authService.logout();
    console.log('Logged out');
    this.router.navigate(['/']);
  }
}
