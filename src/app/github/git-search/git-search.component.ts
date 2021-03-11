import { Component, OnInit } from '@angular/core';
import { GithubService } from '@services/github.service';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.scss']
})
export class GitSearchComponent implements OnInit {
  constructor(private github: GithubService) { }
  ngOnInit() { }
  public onSearch(params) {

  }
}
