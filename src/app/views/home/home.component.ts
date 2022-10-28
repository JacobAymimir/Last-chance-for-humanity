import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'LastChanceForHumanity';
  constructor(private route: ActivatedRoute,private router: Router) { 
  }
  ngOnInit(): void {
  }
  goToQuiz() {
    this.router.navigate(["quiz/1"], { relativeTo: this.route });
  }
  goToEnd() {
    this.router.navigate(["end"], { relativeTo: this.route });
  }
}
