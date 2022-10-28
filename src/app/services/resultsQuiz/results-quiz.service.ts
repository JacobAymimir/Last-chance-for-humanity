import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import QuizQuotes from '../../../assets/QuizQuotes.json';


export interface ResultQuiz {
  results: any[];
  correctAnswers: number;
  message: String;
}

@Injectable({
  providedIn: 'root'
})
export class ResultsQuizService {
  private resultQuiz: ResultQuiz;

  constructor() { 
      this.resultQuiz =  {
    results: [],
    correctAnswers: 0,
    message: ""
  };

  }

    getResult(){
    this.resultQuiz.results.forEach(result => {
    result ? ++this.resultQuiz.correctAnswers : "";
    });
    this.resultQuiz.message = QuizQuotes.messages.find(( (e: any) => e.id == this.resultQuiz.correctAnswers)).message;
    return this.resultQuiz;
    }

     addResult(result: boolean) {
      this.resultQuiz.results.push(result);
  }

}
