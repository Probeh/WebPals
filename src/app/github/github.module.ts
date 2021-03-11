import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { GitProfileComponent } from '@github/git-profile/git-profile.component'
import { GitResultComponent } from '@github/git-result/git-result.component'
import { GitSearchComponent } from '@github/git-search/git-search.component'
import { GithubComponent } from '@github/github.component'

const components = [GithubComponent, GitSearchComponent, GitProfileComponent, GitResultComponent]

@NgModule({
  imports: [CommonModule],
  declarations: components,
  exports: components,
})
export class GithubModule { }