import { Injectable } from "@angular/core";
import QuizData from "../../../assets/QuizData.json";

export interface Quiz {
  correctIndex: any;
  question: string;
  answers: string;
  type: string;
  correctAnswer: any;
  idQuiz: string;
}

@Injectable({
  providedIn: "root",
})
export class QuizService {
  private quiz: any;

  constructor() {}
  retrieveQuizLength() {
    return QuizData.questions.length;
  }

  retrieveQuizById(id: string) {
    let quizReturned = QuizData.questions.find((e: any) => e.id == id);
    this.quiz = {
      question: quizReturned.question,
      answers: quizReturned.answers,
      type: quizReturned.type,
      correctAnswer: quizReturned.correctIndex,
      idQuiz: quizReturned.id,
    };
    return this.quiz;
  }
}
