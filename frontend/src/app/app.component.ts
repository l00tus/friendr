import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';

  isLoggedIn() {
    if(document.location.pathname === '/register' || document.location.pathname === '/login') {
      return false;
    } else {
      return true;
    }
  }
}
