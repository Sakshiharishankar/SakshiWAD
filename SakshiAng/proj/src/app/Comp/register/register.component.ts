import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  
  styleUrl: './register.component.css'
})
export class RegisterComponent {
constructor(private router:Router){}
  register()
{ this.router.navigate(["login"]);}
}
