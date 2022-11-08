import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isAsked: boolean = false;
  hasAnswer: boolean = false;
  question = "";
  answer: string = '';

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  onAsk() {
    this.isAsked = true;
    this.data.getAnswer(this.question).then((answer) => {
      setTimeout(() => {
        this.answer = answer;
        this.hasAnswer = true;
      },1000);
    });
  }

  onAskAgain() {
    this.isAsked = false;
    this.hasAnswer = false;
  }

}
