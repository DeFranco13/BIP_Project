import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnswerService {
  answerArray: any = [];

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

  healthPercentage: any = 0
  valuePercentage: any = 0
  waterPercentage: any = 0
  energyPercentage: any = 0
  socPercentage: any = 0
  bioPercentage: any = 0
  materialPercentage: any = 0

  pushAnswers(incomingArray: any[]) {
    this.answerArray = incomingArray;
  }

  getAnswer() {
    return this.answerArray;
  }

  pushValue(pillar: any, value: any){
    if (pillar == 'health'){
      this.healthPoints += value
    }
    if (pillar == 'value'){
      this.valuePoints += value
    }
    if (pillar == 'water'){
      this.waterPoints += value
    }
    if (pillar == 'energy'){
      this.energyPoints += value
    }
    if (pillar == 'bio'){
      this.bioPoints += value
    }
    if (pillar == 'soc'){
      this.socPoints += value
    }
    if (pillar == 'material'){
      this.materialPoints += value
    }
  }
  
  getValue(pillar: any){
    if (pillar == 'health'){
      return this.healthPoints
    }
    if (pillar == 'value'){
      return this.valuePoints
    }
    if (pillar == 'water'){
      return this.waterPoints
    }
    if (pillar == 'energy'){
      return this.energyPoints
    }
    if (pillar == 'bio'){
      return this.bioPoints
    }
    if (pillar == 'soc'){
      return this.socPoints
    }
    if (pillar == 'material'){
      return this.materialPoints
    }
  }
}