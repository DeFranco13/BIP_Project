import { Component } from '@angular/core';
import { Login } from '../services/loginProvider';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 login = true
 credsTrue = false
 retryLogin = false
 username: any;
 password: any;
 
 

 submitLogin(username: any, password: any){
  console.log(this.username, this.password)
  if (this.username == 'user' && this.password == 'uiopuiop'){
    this.login = false
    this.credsTrue = true
  }else {
    this.retryLogin = true
  }
 }
 
}
