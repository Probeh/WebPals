import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { AppConfig } from '@helpers/app-config'
import { AccountModel, IAccountModel } from '@models/account'

@Injectable()
export class IdentityService {
  public isAuthenticated: boolean = false;
  constructor(args?: AppConfig) { }
  public userLogin(account: IAccountModel): Observable<AccountModel> {
    return new Observable(emitter => {
      const result: AccountModel = new AccountModel();
      this.isAuthenticated = true;

      emitter.next(result)
      emitter.complete();
    })
  }
}
