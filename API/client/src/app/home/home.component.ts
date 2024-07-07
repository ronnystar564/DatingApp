import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';
import { HttpClient } from '@angular/common/http';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RegisterComponent,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{ 
  registerMode = false;
  users: any;
  event: boolean = false;

  constructor(private http: HttpClient, public accountService: AccountService) { }


  ngOnInit(): void {
    this.getUsers();

  }
  registerToggle() {
    this.registerMode = !this.registerMode;
  }
  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('')

    });
  }
  CancelregisterMode(event: boolean) {
    this.registerMode = event;
  }

}
