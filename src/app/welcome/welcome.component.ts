import { Component } from '@angular/core';
import { JsonService } from '../services/serverCall';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../services/loginProvider';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  // Login state for showing Login or Logged in in navbar
  loginState = false
  
  constructor(private loginService: LoginService){}

  screen: any

  ngOnInit(){
    this.getScreenSize()
    this.loginState = this.loginService.getLoginState()
    setInterval( ()=> console.log(this.loginState), 1000 )
    setInterval( ()=> this.loginState = this.loginService.getLoginState(), 1000 )
    setInterval( ()=> console.log(this.screen), 1000)
    setInterval( ()=> console.log(window.outerWidth), 1000)
  }


  getScreenSize(){
    if (window.outerWidth <= 1440){
      this.screen = "laptop"
    }
    
  }
  // This allows the website to scroll smooth to the section
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  scrollToInformation(){
    window.scrollTo({top: 700, behavior: 'smooth'})
  }
  scrollToCalculator(){
    window.scrollTo({top: 2300, behavior: 'smooth'})
  }
  scrollToAbout(){
    window.scrollTo({top: 2800, behavior: 'smooth'})
  }
}
