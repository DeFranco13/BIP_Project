import { Component } from '@angular/core';
import { JsonService } from '../services/serverCall';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  testArray: any; 

  constructor(private jsonService: JsonService, private http: HttpClient) {}
  
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  SubmitResults(){
    
  }
  StartC() {
    this.jsonService.getJsonData().subscribe(data => {
      this.testArray = data;
      console.log(this.testArray);
    });
  }
  
}


