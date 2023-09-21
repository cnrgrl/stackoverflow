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

  constructor(
    public userService: UserService,
    public questionService: QuestionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });

    this.questionService.getOneQuestions(this.id).subscribe((res) => {
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
      // debugger;
      this.solutionText = '';
    });
  }
  vote(index: number, point: number) {
    const solution = this.questionObj.solutions[index];
    const user = this.userService.user;
    const plusIndex = solution.plus.indexOf(user.id);
    const minusIndex = solution.minus.indexOf(user.id);

    if (point == 1) {
      if (plusIndex < 0) {
        solution.plus.push(user.id);
        if (!(minusIndex < 0)) {
          for (let i = 0; i < solution.minus.length; i++) {
            if (solution.minus[i] == this.userService.user.id) {
              solution.minus.splice(i, 1);
            }
          }
        }
      }
    } else {
      if (minusIndex < 0) {
        solution.minus.push(user.id);
        if (!(plusIndex < 0)) {
          for (let i = 0; i < solution.plus.length; i++) {
            if (solution.plus[i] == this.userService.user.id) {
              solution.plus.splice(i, 1);
            }
          }
        }
      }
    }
    this.questionService.addSolution(this.questionObj).subscribe((res) => {
      this.solutionText = '';
    });
  }
}
