import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContainerService } from '@services/container.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public state: boolean;
  constructor(private container: ContainerService, private router: Router) {
    this.state = this.container.sidenavClass == 'expanded';
  }
  ngOnInit() { }
  public onToggleSidenav() {
    this.state = !this.state;
    this.container.$sidenavChanged.next(this.state ? 'expanded' : 'collapsed')
  }
}
