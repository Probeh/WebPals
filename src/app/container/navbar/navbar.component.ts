import { Component, OnInit } from '@angular/core'
import { IdentityService } from '@services/account.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private identity: IdentityService) { }
  ngOnInit() { }
  public userLogout() {
    this.identity.userLogout();
  }
}
