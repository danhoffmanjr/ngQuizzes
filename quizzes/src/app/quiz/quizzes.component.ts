import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  quizzes;
  
  constructor(private quizService : QuizService) { }

  ngOnInit() {
    this.quizService.getQuizzes()
      .subscribe(res => this.quizzes = res);

    console.log(this.quizzes);
  }

}
