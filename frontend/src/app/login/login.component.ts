import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router, private appService: AppService) {}

  username: any = localStorage.getItem("username");

  signIn() {
    this.appService.getUserByUsername(this.username).subscribe({
      next: (response) => {
        localStorage.setItem("firstName", response?.firstName)
        localStorage.setItem("lastName", response?.lastName)
        // localStorage.setItem("username", this.username)
        this.router.navigate(['homepage']);
      }, error: (error) => {

      }
    });
  }
}