import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { AccountService } from './Services/account.service';
import { User } from './_model/user';
import { response } from 'express';
import { HomeComponent } from './home/home.component'
import { MessagesComponent } from './messages/messages.component';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { ToastrModule } from 'ngx-toastr';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavComponent, HomeComponent]


})
export class AppComponent implements OnInit {
  title = 'client';


  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.setCurrentUser();
  }

  private isLocalStorageAvailable(): boolean {
    try {
      return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
    } catch (e) {
      return false;
    }
  }


 
  setCurrentUser() {
    if (this.isLocalStorageAvailable()) {
      const userString = localStorage.getItem('user');
      if (!userString) return;
      const user: User = JSON.parse(userString);
      this.accountService.setCurrentUser(user);
    }
  }
}
