import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { first } from 'rxjs/internal/operators/first';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  loading: boolean = false;

  firstName!: string;
  lastName!: string;
  username!: string;

  constructor(private router: Router, private appService: AppService) {}
  
  signUp() {
    this.loading = true;
        this.appService
        .createUser(this.firstName, this.lastName, this.username)
        .pipe(first())
        .subscribe({
          next: () => {
            this.loading = false;
            this.router.navigate(['login']);
          }, error: (error) => {
            this.loading = false;
            console.log(error);
          }
        });
  }
}
