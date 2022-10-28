import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { QuizComponent } from './views/quiz/quiz.component';
import { ResultQuizComponent } from './views/result-quiz/result-quiz.component';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
      path: 'quiz/:id',
      component: QuizComponent,    
/*       children: [
      {
        path:'', redirectTo:'questionary', pathMatch: "full"
      },
      {
        path:'questionary', component: ListPaymentsComponent
      },

    ] */
  },
    {
      path: 'results',
      component: ResultQuizComponent,    
  },
/*   {
      path: '**',
      component: PageNotFountComponent 
  }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
