import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../Services/account.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  register() {
    this.errorMessage = ''; // Reset the error message before making a request
    this.accountService.register(this.model).subscribe({
      next: response => {
        console.log(response);
        this.cancel();
      },
      error: error => {
        const errorMsg = error.error?.message || error.message || 'An unknown error occurred';
        this.toastr.error(errorMsg)


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
