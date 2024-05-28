import { Component } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {


  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
}
