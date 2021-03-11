import { Injectable } from '@angular/core'
import { AppConfig } from '@helpers/app-config';
import { Subject } from 'rxjs';

@Injectable()
export class ContainerService {
  public $sidenavChanged: Subject<string> = new Subject();
  public sidenavClass: string = 'expanded';
  constructor(private args?: AppConfig) {
    this.sidenavClass = args.expandSidenav ? 'expanded' : 'collapsed';
  }
}
