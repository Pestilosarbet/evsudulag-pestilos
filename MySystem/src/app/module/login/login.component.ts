import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginForm: FormGroup;

constructor(private fb: FormBuilder){
  this.loginForm = this.fb.group({
    username: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]]
  })
}

get username(){
  return this.loginForm.get('username');
}
get password(){
  return this.loginForm.get('password');
}

onLogin(){
  console.log('login successfull');
}
}
