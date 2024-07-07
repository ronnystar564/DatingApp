import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { json } from 'node:stream/consumers';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '../_model/user';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'https://localhost:5001/api/';
  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();



  constructor(private http: HttpClient) { }

  private isLocalStorageAvailable(): boolean {
    try {
      return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
    } catch (e) {
      return false;
    }
  }


  login(model: any) {
    return this.http.post<User>(this.baseUrl + 'Account/login', model).pipe(
      map((response: User) => {
        const user = response;
        if (user && this.isLocalStorageAvailable()) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);

        }
        return user;

      }));
  }
  register(model: any) {
    return this.http.post<User>(this.baseUrl + 'Account/register', model).pipe(
      map(user => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
        return user;
      })
    )
  }
  checkUsernameExists(username: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/checkusername/${username}`);
  }

  setCurrentUser(user: User) {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('user', JSON.stringify(user));
    }
    this.currentUserSource.next(user);
  }
    


  logout() {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem('user');
    }
    this.currentUserSource.next(null);
  }
}

