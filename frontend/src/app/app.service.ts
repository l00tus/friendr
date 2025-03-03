import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = `https://friendr-service-869379210339.europe-west1.run.app`;

  constructor(private http: HttpClient) { }

  getUserByUsername(username: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${username}`);
  }

  createUser(firstName: string, lastName: string, username: string): Observable<any> {
    const userObject = { firstName, lastName, username };
    return this.http.post(`${this.apiUrl}/users`, userObject);
  }

  getPosts(): Observable<any>{
    return this.http.get(`${this.apiUrl}/posts`);
  }

  createPost(author: string, title: string, description: string): Observable<any> {
    const postObject = { author, title, description };
    return this.http.post(`${this.apiUrl}/posts`, postObject);
  }

  updatePostLikes(postId: string, username: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/posts/${postId}/likes`, { username });
  }
}
