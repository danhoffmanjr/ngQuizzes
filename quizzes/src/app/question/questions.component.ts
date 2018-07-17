import { Component, OnInit, Input } from '@angular/core';
import { QuizService } from '../quiz.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  private _data = new BehaviorSubject<any>([]);
  
  questions;

  constructor() { }

  @Input()
  set data(value) {
    // set the latest value for _data BehaviorSubject
    this._data.next(value);
  };

  get data() {
    // get the latest value from _data BehaviorSubject
    return this._data.getValue();
  }


  ngOnInit() {
    this._data.subscribe(x => this.questions = x);
  }

  ngOnDestroy() {
    this._data.unsubscribe();
  }

}