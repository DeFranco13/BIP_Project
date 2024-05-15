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
  keyArray = ["Health", "Value", "Society & Culture", "Biodiversity", "Water", "Energy", "Materials"]
  currentKey: number = 0

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
  getCurrentPillar(){
    return this.keyArray[this.currentKey]
  }
  addCurrentKey(){
    this.currentKey += 1
  }
  getCurrentKey(){
    return this.currentKey
  }
  LoadJson(){
    this.JsonArray = this.jsonService.getJsonLocal()
    console.log(this.jsonService)
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
  
  
}


