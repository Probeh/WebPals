import { Observable, Subject } from 'rxjs'
import { tap } from 'rxjs/operators'
import { Injectable } from '@angular/core'
import { Providers } from '@enums/provider.enum'
import { AppConfig } from '@helpers/app-config'
import { IAccountModel } from '@models/account'
import { NetworkService } from '@services/network.service'

@Injectable()
export class IdentityService {
  public isAuthenticated: boolean = false;
  private $authChanged: Subject<IAccountModel> = new Subject();
  private account: IAccountModel;
  constructor(private network: NetworkService, private args?: AppConfig) { }

  public identityListener(): Observable<IAccountModel> {
    return new Observable(emitter => {
      console.log('New identityListener subscription');
      if ((!this.isAuthenticated || !this.account) && localStorage.getItem('Identity')) {
        console.log('Identity found in storage');
        this.account = JSON.parse(localStorage.getItem('Identity'));
        this.isAuthenticated = true;
      }
      this.$authChanged.subscribe({
        next: (result: IAccountModel) => {
          console.log('AuthState changed');
          this.account = result;
          this.isAuthenticated = result?.state;
          emitter.next(this.account);
        }
      });
      emitter.next(this.account)
    });
  }
  public userLogin(account: IAccountModel): Promise<IAccountModel> {
    return this.network
      .get<IAccountModel>({ provider: Providers.Identity })
      .pipe(tap((result: IAccountModel) => {
        this.$authChanged.next({ name: result.name, user: result.user, state: true });
        localStorage.setItem('Identity', JSON.stringify(result));
      }))
      .toPromise();
  }
  public userLogout(): Promise<void> {
    return Promise.resolve().then(() => {
      if (this.isAuthenticated && localStorage.getItem('Identity')) {
        localStorage.removeItem('Identity');
        this.$authChanged.next({ state: false });
      }
    })
  }
}
