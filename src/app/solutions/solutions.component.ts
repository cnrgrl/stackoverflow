import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css'],
})
export class SolutionsComponent implements OnInit {
  id: any = '';
  questionObj: any = '';
  solutionText: any = '';
  // id: string | null = '';
  constructor(
    public userService: UserService,
    public questionService: QuestionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      console.log(this.id);
    });

    this.questionService.getOneQuestions(this.id).subscribe((res) => {
      console.log(res);
      this.questionObj = res;
    });
  }
  submitSolution() {
    let solutionObj: any = {
      username: this.userService.user.userName,
      solution: this.solutionText,
      plus: [],
      minus: [],
    };
    this.questionObj.solutions.push(solutionObj);
    this.questionService.addSolution(this.questionObj).subscribe((res) => {
      debugger;
    });
  }
}
