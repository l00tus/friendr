import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  posts: any = [
    {
      id: 1,
      user_id: 10,
      date: 'Fri Jun 28 2024 11:45:48 GMT+0300 (Eastern European Summer Time)',
      title: 'post 1',
      description: `this is my first post`
    },
    {
      id: 2,
      user_id: 10,
      date: 'Fri Jun 28 2024 11:46:48 GMT+0300 (Eastern European Summer Time)',
      title: 'post 2',
      description: `this is my second post`
    },
    {
      id: 3,
      user_id: 10,
      date: 'Fri Jun 28 2024 11:48:48 GMT+0300 (Eastern European Summer Time)',
      title: 'post 3',
      description: `this is my third post`
    }
  ];

  title: string = '';
  description: string = '';

  createPost() {
    const postObj = {
      id: 4,
      user_id: 10,
      date: Date.now(),
      title: this.title,
      description: this.description
    }
    
    this.posts.push(postObj);
  }
}
