import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class QuestionService extends BaseService {
  public user: any;

  constructor(private base: BaseService) {
    super(base.http);
  }

  public createQuestion(questionsObj: any) {
    return this.postReq('/questions', questionsObj);
  }
  public getQuestions() {
    return this.getReq('/questions');
  }
}
