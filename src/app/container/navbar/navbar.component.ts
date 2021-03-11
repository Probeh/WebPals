import { Component, OnInit } from '@angular/core';
import { MessageType } from '@enums/message.enum';
import { IdentityService } from '@services/account.service';
import { MessageService } from '@services/message.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private identity: IdentityService, private message: MessageService) { }
  ngOnInit() { }
  public userLogout() {
    this.identity.userLogout()
      .then(() => this.message.show('Signed out', '', MessageType.Warning));
  }
}
