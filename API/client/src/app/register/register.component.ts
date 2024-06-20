import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  model: any = {}
  passwordFieldType: string = 'password'; 


  register() {
    console.log(this.model);

  }
  cancel() {
    console.log('canceled')
  }
  //togglePasswordVisibility() {
  //  this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  //}

}
