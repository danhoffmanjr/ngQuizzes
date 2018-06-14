import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private questionsUrl = "http://localhost:52920/api/questions";
  private quizzesUrl = "http://localhost:52920/api/quizzes";

  private selected = new Subject<any>();
  questionSelected = this.selected.asObservable();
  
  constructor(private http: HttpClient) { }

  getQuestions() {
    return this.http.get(this.questionsUrl);
  }

  postQuestion(question) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.http.post(this.questionsUrl, question, httpOptions)
      .subscribe(res => console.log(res));
  }

  updateQuestion(question) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.http.put(this.questionsUrl + `/${question.id}`, question, httpOptions)
      .subscribe(res => console.log(res));
  }

  postQuiz(quiz) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.http.post(this.quizzesUrl, quiz, httpOptions)
      .subscribe(res => console.log(res));
  }

  selectQuestion(question) {
    this.selected.next(question);
  }

}
