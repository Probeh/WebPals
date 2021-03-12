import { Component, Input, OnInit, ViewChild } from '@angular/core'
import { GitProfile, IGitProfile } from '@models/git-profile'
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'app-git-result',
  templateUrl: './git-result.component.html',
  styleUrls: ['./git-result.component.scss']
})
export class GitResultComponent implements OnInit {
  @Input() public profiles: IGitProfile[];
  @ViewChild('dialog') private set dialog(ref: Dialog) {
    ref.closable = true;
    ref.closeIcon = "pi pi-times";
    ref.closeOnEscape = true;
    ref.dismissableMask = true;
    ref.draggable = true;
    ref.maximizable = true;
    ref.maximizeIcon = "pi pi-window-maximize";
    ref.minimizeIcon = "pi pi-window-minimize";
    ref.modal = true;
    ref.position = "center";
    ref.resizable = true;
  }
  public showDialog: boolean = false;
  public profileItem: GitProfile;
  constructor() { }
  ngOnInit() { }
  public onShowDialog(profile: IGitProfile) {
    this.showDialog = true;
    this.profileItem = new GitProfile(profile);
  }
}
