import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getUserByUsername(username: string): Observable<any> {
    return this.http.get(`http://localhost:3000/users/${username}`);
  }

  createUser(firstName: string, lastName: string, username: string): Observable<any> {
    const userObject = { firstName, lastName, username };
    return this.http.post('http://localhost:3000/users', userObject);
  }

  getPosts(): Observable<any>{
    return this.http.get(`http://localhost:3000/posts`);
  }
}
