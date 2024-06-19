import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../Services/account.service';
import { response } from 'express';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
  
})
export class NavComponent {

  model: any = {}
  logedIn = false;

  constructor(private accountServices: AccountService) {

  }
  login() {
    this.accountServices.login(this.model).subscribe({
      next: response => {
        console.log(response);
        this.logedIn = true;
      },
      error: error => console.log(error)
    })
  }

  logout() {
    this.logedIn = false;
  }

}


