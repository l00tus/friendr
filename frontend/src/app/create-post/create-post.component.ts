import { Component } from '@angular/core';
import { first } from 'rxjs';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss',
})
export class CreatePostComponent {
  loading: boolean = false;

  author: any = localStorage.getItem("username");
  title!: string;
  description!: string;

  constructor(private router: Router, private appService: AppService) {}

  submitPost() {
    this.loading = true;
    this.appService
      .createPost(this.author, this.title, this.description)
      .pipe(first())
      .subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['homepage']);
        },
        error: (error) => {
          this.loading = false;
          console.log(error);
        },
      });
  }
}
