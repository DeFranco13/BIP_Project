import { Component } from '@angular/core';
import { AnswerService } from '../services/answerService';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

  array: any = []
  constructor(private answerService: AnswerService){

  }

  ngOnInit(){
    this.array = this.answerService.getAnswer()
    console.log(this.array)
    
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
}
