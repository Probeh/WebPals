import { Subject } from 'rxjs'
import { tap } from 'rxjs/operators'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Providers } from '@enums/provider.enum'
import { IAccountModel } from '@models/account'
import { NetworkService } from '@services/network.service'

@Injectable()
export class IdentityService {
  public $authChanged: Subject<IAccountModel> = new Subject();
  public account: IAccountModel = { state: false };
  constructor(private network: NetworkService, private router: Router) {
    this.$authChanged.subscribe({
      next: (result: IAccountModel) => {
        if (result.state) {
          localStorage.setItem('Identity', JSON.stringify(result));
        }
        else localStorage.removeItem('Identity');
        this.router.navigate([result.state ? 'search' : 'auth']);
        this.account = result;
      }
    });
    this.initIdentity();
  }

  private initIdentity(): Promise<void> {
    return Promise.resolve().then(() => {
      if (!this.account.state && localStorage.getItem('Identity')) {
        this.$authChanged.next(JSON.parse(localStorage.getItem('Identity')));
      }
    });
  }

  public userLogin(account: IAccountModel): Promise<IAccountModel> {
    return this.network
      .get<IAccountModel>({ provider: Providers.Identity, path: account.user })
      .pipe(tap((result: IAccountModel) => {
        if (result?.user == account.user && result?.pass == account.pass) {
          this.$authChanged.next({ name: result.name, user: result.user, state: true });
        }
        else throw Error('Invalid username or password');
      }))
      .toPromise();
  }
  public userLogout(): Promise<void> {
    return Promise.resolve().then(() => {
      if (localStorage.getItem('Identity')) {
        this.$authChanged.next({ state: false });
      }
    })
  }
}
