import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Output() registerMode = new EventEmitter();
  model: any = {};
  passwordFieldType: string = 'password';
  errorMessage: string = ''; // Add this line

  constructor(private accountService: AccountService) { }

  register() {
    this.errorMessage = ''; // Reset the error message before making a request
    this.accountService.register(this.model).subscribe({
      next: response => {
        console.log(response);
        this.cancel();
      },
      error: error => {
        console.log(error);
        this.errorMessage = error.error.message || 'An unexpected error occurred. Please try again later.'; // Update this line
      }
    });
  }

  cancel() {
    this.registerMode.emit(false);
  }

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  validatePassword(password: string): boolean {
    const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$&*]).{8,}$/;
    return passwordPattern.test(password);
  }

  validateEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  passwordsMatch(password: string, confirmPassword: string): boolean {
    return password === confirmPassword;
  }
}
