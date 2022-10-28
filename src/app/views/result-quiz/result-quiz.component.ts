import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { ResultsQuizService } from 'src/app/services/resultsQuiz/results-quiz.service';

@Component({
  selector: 'app-result-quiz',
  templateUrl: './result-quiz.component.html',
  styleUrls: ['./result-quiz.component.scss']
})
export class ResultQuizComponent implements OnInit {
  showError: boolean = false;
  private unsubscriber: Subject<void> = new Subject<void>();
  answers = this.resultsQuizService.getResult();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private resultsQuizService: ResultsQuizService
  ) { }

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

}
