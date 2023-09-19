import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  public user: any;

  constructor(private base: BaseService) {
    super(base.http);
  }

  public createAccount(userObj: any) {
    console.log(this.user);
    return this.postReq('/users', userObj);
  }
  public getUser(email: string) {
    console.log(this.user);
    return this.getReq('/users?email=' + email);
  }
}
