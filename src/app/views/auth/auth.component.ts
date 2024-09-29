import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {NgIf} from "@angular/common";
import {AuthService} from "../../services/authService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    NgIf
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  misMatch=false;
  userName='';
  password = '';
  hide = false;
  constructor(private authService: AuthService, private router: Router) {
    // this.authService.logout();

  }
  login() {
    this.authService.login({username: this.userName, password: this.password}).subscribe((response) => {
      console.log("this is auth login fn " +JSON.stringify(response));
      localStorage.setItem('userName', response.user.username);
      localStorage.setItem('userType', response.user.role);
      localStorage.setItem('userId', response.user.id);
      localStorage.setItem('refreshToken', response.refreshToken);
      localStorage.setItem('accessToken', response.accessToken);
      this.router.navigate(['/']).then(()=>{console.log("navigated to home")});

    });
  }
}
