import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RegisterComponent,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  registerMode = false;

  constructor() { }


  ngOnInit():void {

  }
  registerToggle() {
    this.registerMode = !this.registerMode;
  }

}
