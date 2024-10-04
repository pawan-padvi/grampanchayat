import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
constructor(private router:Router){}
Logout():void{
  localStorage.removeItem('password');
  localStorage.removeItem('username');
  this.router.navigate(['login']);
}
}
