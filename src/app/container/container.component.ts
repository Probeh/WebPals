import { PrimeNGConfig } from 'primeng/api'
import { Component, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { IdentityService } from '@services/account.service'
import { IAccountModel } from '@models/account';
import { ContainerService } from '@services/container.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  public route: string = '';
  public sidenav: string;
  public account: IAccountModel;

  constructor(private primengConfig: PrimeNGConfig, private router: Router, private identity: IdentityService, private container: ContainerService) {
    this.primengConfig.ripple = true;
    this.account = this.identity.account;
    this.sidenav = this.container.sidenavClass;

    this.container.$sidenavChanged
      .subscribe({ next: result => this.sidenav = result });
    this.router.events
      .subscribe({
        next: event => this.route = !(event instanceof NavigationEnd) ? this.route :
          event.urlAfterRedirects.slice(1).replace('/', ' ')
      });
    this.identity.$authChanged
      .subscribe({ next: result => this.account = result });
  }
  ngOnInit() { }
}
