import { Component, OnInit } from '@angular/core'
import { IGitProfile } from '@models/git-profile'
import { GithubService } from '@services/github.service'

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.scss']
})
export class GitSearchComponent implements OnInit {
  public search: string;
  public profiles: IGitProfile[];
  constructor(private github: GithubService) { }
  ngOnInit() { }
  public onSearch() {
    this.profiles = null;
    this.github.searchUsers(this.search).then(result => this.profiles = result);
  }
}
