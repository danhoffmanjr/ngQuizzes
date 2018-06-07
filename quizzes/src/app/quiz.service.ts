import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  private questionsUrl = "http://localhost:52920/api/questions";

  postQuestion(question) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.http.post(this.questionsUrl, question, httpOptions)
      .subscribe(res => console.log(res));
  }

}
