import { Injectable } from '@angular/core'
import { AppConfig } from '@helpers/app-config';

@Injectable()
export class ContainerService {
  public sidenavClass: string = 'expanded';
  constructor(private args?: AppConfig) {
    this.sidenavClass = args.expandSidenav ? 'expanded' : 'collapse';
  }
}
