import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions;
  
  constructor(private quizService : QuizService) { }

  ngOnInit() {
    this.quizService.getQuestions()
      .subscribe(res => this.questions = res);

    console.log(this.questions);
  }

}
