import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { first } from 'rxjs/internal/operators/first';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router, private appService: AppService) {}

  username: any = localStorage.getItem("username");
  loading: boolean = false;

  signIn() {
    this.loading = true;
    this.appService
    .getUserByUsername(this.username)
    .pipe(first())
    .subscribe({
      next: (response) => {
        this.loading = false;
        localStorage.setItem("firstName", response?.firstName)
        localStorage.setItem("lastName", response?.lastName)
        localStorage.setItem("username", this.username)
        this.router.navigate(['homepage']);
      }, error: (error) => {
        this.loading = false;
        console.log(error);
      }
    });
  }
}