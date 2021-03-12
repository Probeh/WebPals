import { Component, Input, OnInit } from '@angular/core'
import { IGitProfile } from '@models/git-profile'

@Component({
  selector: 'app-git-result',
  templateUrl: './git-result.component.html',
  styleUrls: ['./git-result.component.scss']
})
export class GitResultComponent implements OnInit {
  @Input() public profiles: IGitProfile[];
  constructor() { }
  ngOnInit() { }
}
