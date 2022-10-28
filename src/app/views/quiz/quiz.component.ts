import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { fromEvent, Subject, takeUntil } from "rxjs";
import { QuizService } from "src/app/services/quiz/quiz.service";
import { ResultsQuizService } from "src/app/services/resultsQuiz/results-quiz.service";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.scss"],
})
export class QuizComponent implements OnInit {
  title = "LastChanceForHumanity";

  showError: boolean = false;
  private unsubscriber: Subject<void> = new Subject<void>();
  form: FormGroup;

  quizId = this.route.snapshot.paramMap.get("id");
  quiz = this.quizService.retrieveQuizById(this.quizId!);
  quizLength = this.quizService.retrieveQuizLength();
  correctAnswer: string = "";
  correct: boolean = false;

  constructor(
    private quizService: QuizService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private resultsQuizService: ResultsQuizService
  ) {
    this.form = this.formBuilder.group({
      answer: new FormControl("", Validators.compose([Validators.required])),
    });
  }
  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    history.pushState(null, "");

    fromEvent(window, "popstate")
      .pipe(takeUntil(this.unsubscriber))
      .subscribe((_) => {
        history.pushState(null, "");
        this.showError = true;
      });
  }

  submit() {
    if ((this.quiz.type == "input")) {
      this.form.value.answer = this.form.value.answer;
      this.correctAnswer = this.quiz.correctAnswer.charAt(0).toUpperCase() + this.quiz.correctAnswer.slice(1);
    } else {
      this.form.value.answer = parseInt(this.form.value.answer);
      this.correctAnswer = this.quiz.answers[this.quiz.correctAnswer];
    }

    
    if (this.form.value.answer == this.quiz.correctAnswer) {
      this.correct = true;
      this.resultsQuizService.addResult(true);
    } else {
      this.correct = false;
      this.resultsQuizService.addResult(false);
    }

    if (this.quiz.idQuiz == this.quizLength) {
      setTimeout(() => {
        this.router.navigate(["results"]);
      }, 6000);
    } else {
      setTimeout(() => {
        this.router.navigate(["../quiz", this.quiz.idQuiz + 1], {
          relativeTo: this.route.parent,
        });
      }, 6000);
    }
  }

  sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
