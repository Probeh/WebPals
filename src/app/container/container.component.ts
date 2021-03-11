import { PrimeNGConfig } from 'primeng/api'
import { Component, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  public route: string;
  public showSidenav: boolean = true;

  constructor(private primengConfig: PrimeNGConfig, private router: Router) {
    this.primengConfig.ripple = true;
    this.router.events.subscribe({
      next: event =>
        this.route = !(event instanceof NavigationEnd) ? this.route :
          event.urlAfterRedirects.slice(1).replace('/', ' ')
    });
  }
  ngOnInit() { }
}
