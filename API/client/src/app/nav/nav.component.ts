import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../Services/account.service';
import { response } from 'express';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable, of } from 'rxjs';
import { User } from '../_model/user';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
  
})
export class NavComponent {

  model: any = {}
  errorMessage: string = '';
  

  constructor(public accountServices: AccountService) { }

  ngOnit(): void {
   
  }


  login() {
    this.accountServices.login(this.model).subscribe({
      next: response => {
        console.log(response);
      },
      error: error => {
        console.log(error);
        
        this.errorMessage = error.error.message || 'An unexpected error occurred. Please try again later.';
      }
    })
  }

  logout() {
    this.accountServices.logout();
    
  }

}


