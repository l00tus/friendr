import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  username = localStorage.getItem("username");
  userAvatarURL = 'https://aui.atlassian.com/aui/9.1/docs/images/avatar-person.svg';
}
