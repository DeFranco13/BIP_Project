import { Component } from '@angular/core';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

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
