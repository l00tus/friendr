import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { AppService } from '../app.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  @Input() postInput: any;

  loading = false;
  username: any = localStorage.getItem("username");
  userAvatarURL = 'https://aui.atlassian.com/aui/9.1/docs/images/avatar-person.svg';
  liked = false;

  constructor(private appService: AppService, private cdr: ChangeDetectorRef) {}
  
  ngOnInit() {
    this.liked = this.postInput.likes.includes(this.username);
  }

  updateLikes() {
    const postId = this.postInput.id;
    this.loading = true;
            this.appService
            .updatePostLikes(postId, this.username)
            .pipe(first())
            .subscribe({
              next: (response) => {
                this.loading = false;
                
                this.postInput.likes = response.likes;

                this.liked = response.likes.includes(this.username);
                
                this.cdr.detectChanges();
              }, error: (error) => {
                this.loading = false;
                console.log(error);
              }
            });
  }

}