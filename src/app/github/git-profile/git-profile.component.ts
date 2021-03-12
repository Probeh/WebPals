import { Component, Input, OnInit } from '@angular/core'
import { GitProfile } from '@models/git-profile'

@Component({
  selector: 'app-git-profile',
  templateUrl: './git-profile.component.html',
  styleUrls: ['./git-profile.component.scss']
})
export class GitProfileComponent implements OnInit {
  @Input() public profile: GitProfile;
  constructor() { }
  ngOnInit() { }
}
