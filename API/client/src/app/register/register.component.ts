import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../Services/account.service';
import { response } from 'express';
import { error } from 'console';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  @Output() registerMode = new EventEmitter();
  model: any = {}
  passwordFieldType: string = 'password';

  constructor(private accountService: AccountService) {

  }


  register() {
    this.accountService.register(this.model).subscribe({
      next: response => {
        console.log(response);
        this.cancel();
      },
      error: error => console.log(error)
    })

  }
  cancel() {
    this.registerMode.emit(false);
  }
 

}
