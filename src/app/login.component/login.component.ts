import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  username = "";
  password = "";

  constructor(private router: Router) {}

  login() {

    localStorage.setItem("username", this.username);
    localStorage.setItem("password", this.password);

    this.router.navigate(['/dashboard']);

  }

}