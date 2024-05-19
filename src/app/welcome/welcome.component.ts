import { Component } from '@angular/core';
import { JsonService } from '../services/serverCall';
import { HttpClient } from '@angular/common/http';
import { Login } from '../services/loginProvider';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  loginState = false
  

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
