import { Component } from '@angular/core';
import { JsonService } from '../services/serverCall';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  boolCalculator = false;
  boolResults = false;
  JsonArray: any;
  testArrayServer: any; 

  constructor(private jsonService: JsonService, private http: HttpClient) {}
  
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  SubmitResults(){

  }
  startResults(){
    this.boolResults = true
  }

  StartCalculator(){
    this.boolCalculator = true
    this.LoadJson()
  }

  LoadJson(){
    this.JsonArray = this.jsonService.getJsonLocal()
    console.log(this.jsonService)
  }
  
  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
  LoadJsonServer() {
    // Ignore this, its for testing the backend
    this.jsonService.getJsonData().subscribe(data => {
      this.testArrayServer = data;
      console.log(this.testArrayServer[0]);
    });
  }
  
}


