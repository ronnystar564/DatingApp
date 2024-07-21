import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../Services/account.service';
import { response } from 'express';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable, of } from 'rxjs';
import { User } from '../_model/user';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';


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
  

  constructor(public accountServices: AccountService, private router: Router) { }

  ngOnit(): void {
   
  }


  login() {
    this.accountServices.login(this.model).subscribe({
      next: _=> 
        this.router.navigateByUrl('/members'),
      
      error: error => {
        console.log(error);
        
       
      }
    })
  }

  logout() {
    this.accountServices.logout();
    this.router.navigateByUrl('/');
    
  }

}


