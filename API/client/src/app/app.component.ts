import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent implements OnInit {
  title = 'client';
  users: any; // Initialize as an empty array

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => {
        console.log(response); // Log the response to verify the data structure
        this.users = response;
      },
      error: error => console.log(error),
      complete: () => console.log('request has been completed')
    });
  }
}
