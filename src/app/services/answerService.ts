import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnswerService {
  answerArray: any = [];

  pushAnswers(incomingArray: any[]) {
    this.answerArray = incomingArray;
  }

  getAnswer() {
    return this.answerArray;
  }
}