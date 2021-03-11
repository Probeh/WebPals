import { Component, OnInit } from '@angular/core';
import { ContainerService } from '@services/container.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  private state: boolean;
  constructor(private container: ContainerService) {
    this.state = this.container.sidenavClass == 'expanded';
  }
  ngOnInit() { }
  public onToggleSidenav() {
    this.state = !this.state;
    this.container.$sidenavChanged.next(this.state ? 'expanded' : 'collapsed')
  }
}
