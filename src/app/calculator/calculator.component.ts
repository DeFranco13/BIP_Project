import { Component } from '@angular/core';
import { JsonService } from '../services/serverCall';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  pushAnswers = false
  questionAnswer : any = [];
  questionNumber = 0;
  boolCalculator = false;
  boolResults = false;
  JsonArray: any;
  keyArray = ["Company", "Materials", "Energy", "Water", "Biodiversity", "Society & Culture", "Health", "Value"]
  currentKey: number = 0

  constructor(private jsonService: JsonService, private http: HttpClient) {
   
  }
  
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getArray(){
    console.log(this.questionAnswer)
  }
  pushAnswer(iteration: any,  answer: any){
     // Ensure the element at `iteration` is an array
     if (!Array.isArray(this.questionAnswer[iteration])) {
      this.questionAnswer[iteration] = [];
    }

    // Now push the answer
    this.questionAnswer[iteration].push(answer);
  }

  
  
  SubmitResults(){

  }
  startResults(){
    this.boolResults = true
  }
  initiateQuestionNumber(answer: any){
    this.questionAnswer.push(answer)
    this.questionNumber += 1
  }

  StartCalculator(){
    this.boolCalculator = true
    this.LoadJson()
  }

  getCurrentPillar(){
    return this.keyArray[this.currentKey]

  }

  addCurrentKey(){
    this.pushAnswers = true
    this.currentKey += 1
  }

  removeCurrentKey(){
    this.currentKey -= 1
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


