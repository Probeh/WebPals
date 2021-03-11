import { Component } from '@angular/core';
import { IdentityService } from '@services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private identity: IdentityService) { this.identity.identityListener().toPromise(); }
}
