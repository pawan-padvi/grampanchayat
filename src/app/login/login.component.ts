import { Component,OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: string | null = null;

  constructor(private fb: FormBuilder, private router: Router) {
    // Initialize the form
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    // Check if user is already logged in (e.g., via localStorage)
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    // If saved credentials exist, redirect to dashboard
    if (savedUsername && savedPassword) {
      this.router.navigate(['dashboard']);
    }
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
    
      const { username, password } = this.loginForm.value;
      // Simulating a login check
      if (username === 'admin' && password === 'admin') {
        console.log("calling login");
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
          localStorage.setItem('userid', "111");
        // Redirect to the dashboard on successful login
        this.router.navigate(['dashboard']);
      } else {
        this.error = 'Invalid username or password';
      }
    } else {
      this.error = 'Please fill in all fields';
    }
  }
}