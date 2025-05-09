// src/app/_services/members.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../_model/member';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.baseUrl + 'users');
  }
}
