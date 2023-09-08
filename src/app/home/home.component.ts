import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormControl } from '@angular/forms';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    public questionService: QuestionService,
    public userService: UserService,
    private form: FormControl
  ) {}

  question: string = '';
  questionList: Array<any> = [];

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe((res) => {
      this.questionList = res;
    });
  }
  submitQuestion(): void {
    this.questionService
      .createQuestion({
        userName: this.userService.user.userName,
        question: this.question,
        solutions: [],
      })
      .subscribe((res) => {
        console.log(res);
        this.questionList.push(this.question);
      });
  }
}
