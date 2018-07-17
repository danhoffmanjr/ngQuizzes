import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { QuizService } from '../quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quiz: Object = {};
  quizForm: FormGroup;
  questions;
  private sub: Subscription;

  constructor(private quizService: QuizService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

  post(quiz) {
    this.quizService.postQuiz(quiz)
      .subscribe(
        res => this.reroute(res)
      );
  }

  reroute(quiz) {
    this.router.navigate([`quizzes/${quiz.id}`]);
  }

  update(quiz) {
    this.quizService.updateQuiz(quiz);
  }

  getQuiz(id) {
    this.quizService.getQuizById(id)
      .subscribe(payload => this.setForm(payload));
  }

  setForm(data) {
    this.quiz = data;
    this.quizForm.patchValue({
      title: data.title
    });
    this.questions = data.questions;
    console.log(this.questions);
  }

  ngOnInit() {
    this.quizForm = this.fb.group({
      title: ''
    });

    this.sub = this.route.params.subscribe(
      params => {
        let id = +params['id'];
        if (id > 0 && id != null) {
          this.getQuiz(id);
        }
      }
    );
  }

}
