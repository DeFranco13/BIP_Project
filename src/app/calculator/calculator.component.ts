import { Component } from '@angular/core';
import { JsonService } from '../services/serverCall';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AnswerService } from '../services/answerService';
import { LoginService } from '../services/loginProvider';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  questionAnswer : any = [];
  questionNumber = 0;
  boolCalculator = false;
  JsonArray: any;
  keyArray = ["Company", "Materials", "Energy", "Water", "Biodiversity", "Society & Culture", "Health", "Value"]
  currentKey: number = 0

  constructor(private jsonService: JsonService, private http: HttpClient, private router: Router, private answerservice: AnswerService, public login: LoginService) {
   
  }
  
  // Move to top
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  // Console log check for answer array
  getArray(){
    console.log(this.questionAnswer)
  }

  // Function to push to array
  pushAnswer(iterationPillar: any, iterationRow: any, answer: any, value: any) {
    // Ensure the first level array exists
    if (!Array.isArray(this.questionAnswer[iterationPillar])) {
      this.questionAnswer[iterationPillar] = [];
    }

    // Ensure the second level array exists
    if (!Array.isArray(this.questionAnswer[iterationPillar][iterationRow])) {
      this.questionAnswer[iterationPillar][iterationRow] = [];
    }

    // Now push the answer
    this.questionAnswer[iterationPillar][iterationRow].push(answer);
    console.log(answer)
    console.log(value)
    
    if (iterationPillar == 0){
      this.answerservice.pushValue("health", value)
    }

    if (iterationPillar == 1) {
      this.answerservice.pushValue("value", value)
    }

    if (iterationPillar == 2){
      this.answerservice.pushValue("soc", value)
    }

    if (iterationPillar == 3){
      this.answerservice.pushValue("bio", value)
    }

    if (iterationPillar == 4){
      this.answerservice.pushValue("water", value)
    }

    if (iterationPillar == 5){
      this.answerservice.pushValue("energy", value)
    }

    if (iterationPillar == 6){
      this.answerservice.pushValue("material", value)
    }


  }
  test(value: any){
    return value
  }

  pushAnswerMultipleChoice(iterationPillar: any, iterationRow: any, answer: any){

    if (!Array.isArray(this.questionAnswer[iterationPillar])) {
      this.questionAnswer[iterationPillar] = [];
    }

     // Ensure the second level array exists
     if (!Array.isArray(this.questionAnswer[iterationPillar][iterationRow])) {
      this.questionAnswer[iterationPillar][iterationRow] = [];
    }

    console.log(this.questionAnswer[iterationPillar][iterationRow].find((element: any) => element == answer  ) );
    if (this.questionAnswer[iterationPillar][iterationRow].find((element: any) => element == answer  ) != undefined ){
      this.questionAnswer[iterationPillar][iterationRow] = this.questionAnswer[iterationPillar][iterationRow].filter((element: any) => element != answer);
    } else{
      // Now push the answer
      this.questionAnswer[iterationPillar][iterationRow].push(answer);
      console.log(answer)
    }
    console.log(this.questionAnswer[iterationPillar][iterationRow]);
  }
  
  // Function to finish questions and start result
  SubmitResults(){
    this.answerservice.pushAnswers(this.questionAnswer)
    console.log(this.questionAnswer)
    // function to push answers
    //this.router.navigate(['/result'])
    this.router.navigate(['/login'])
  }

  // Start Calc
  StartCalculator(){
    this.boolCalculator = true
    this.LoadJson()
  }


  // Get current pillar in json
  getCurrentPillar(){
    return this.keyArray[this.currentKey]
  }

  // Add a iteration in json
  addCurrentKey(){
    this.currentKey += 1
  }

  // Get back in question set
  removeCurrentKey(){
    this.currentKey -= 1
  }


  // get current key
  getCurrentKey(){
    return this.currentKey
  }


  // load local json
  LoadJson(){
    this.JsonArray = this.jsonService.getJsonLocal()
    console.log(this.jsonService)
  }

  

  // get object from json
  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
  
  
}


