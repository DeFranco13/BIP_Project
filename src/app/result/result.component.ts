import { Component } from '@angular/core';
import { AnswerService } from '../services/answerService';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

  array: any = []
  healthArray: any = []
  companyArray: any = []
  valueArray: any = []
  waterArray: any = []
  energyArray: any = []
  socArray: any = []
  bioArray: any = []
  materialArray: any = []

  healthPoints: any = 0
  valuePoints: any = 0
  waterPoints: any = 0
  energyPoints: any = 0
  socPoints: any = 0
  bioPoints: any = 0
  materialPoints: any = 0

  healthMax: any = 0
  valueMax: any = 0
  waterMax: any = 0
  energyMax: any = 0
  socMax: any = 0
  bioMax: any = 0
  materialMax: any = 0

  constructor(private answerService: AnswerService){

  }

  ngOnInit(){
    this.array = this.answerService.getAnswer()
    this.fixArray()
    console.log(this.healthArray)
  }

  getAnswers(pillar: number, iteration: number){

    if (pillar == 0){
      return this.healthArray[iteration]
    }
    else if (pillar == 1){
      return this.valueArray[iteration]
    }
    else if (pillar == 2){
      return this.socArray[iteration]
    }
    else if (pillar == 3){
      return this.bioArray[iteration]
    }
    else if (pillar == 4){
      return this.waterArray[iteration]
    }
    else if (pillar == 5){
      return this.energyArray[iteration]
    }
    else if (pillar == 6){
      return this.materialArray[iteration]
    }
    else if (pillar == 7){
      return this.companyArray[iteration]
    }
  }

  fixArray(){
    this.healthArray = this.array[0]
    this.valueArray = this.array[1]
    this.socArray = this.array[2]
    this.bioArray = this.array[3]
    this.waterArray = this.array[4]
    this.energyArray = this.array[5]
    this.materialArray = this.array[6]
    this.companyArray = this.array[7]
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
}
