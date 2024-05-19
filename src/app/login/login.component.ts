import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 login = true
 username: any;
 password: any;

 submitLogin(username: any, password: any){
  this.login = false
  console.log(this.username, this.password)
 }
 
}
