import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { QuizService } from '../quiz.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private quizService: QuizService, private route: ActivatedRoute, private location: Location, private fb: FormBuilder) {

  }

  isNew: Boolean;
  id: number;
  quizId: number;
  questionForm: FormGroup;
  question: object = {};
  private sub: Subscription;

  getQuestion(id) {
    this.quizService.getQuestionById(id)
      .subscribe(payload => this.question = payload);
  }
  
  post(question) {
    question.quizId = this.quizId;
    this.quizService.postQuestion(question);
  }

  update(question) {
    this.quizService.updateQuestion(question);
  }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.quizId = +this.route.snapshot.params['quizId'];

    if (this.id == 0) {
      this.isNew = true;
      console.log('New question for quiz ' + this.quizId);
    } else {
      this.isNew = false;
      console.log('Editing question ' + this.id + ' for quiz ' + this.quizId);
      this.getQuestion(this.id);
    }
  }

  onBack(): void {
    this.location.back();
  }

}