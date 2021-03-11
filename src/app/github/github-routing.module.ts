import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { GitProfileComponent } from '@github/git-profile/git-profile.component'
import { GitSearchComponent } from '@github/git-search/git-search.component'
import { GithubComponent } from '@github/github.component'

const routes: Routes = [
  {
    path: '', component: GithubComponent, children: [
      { path: 'search', component: GitSearchComponent },
      { path: 'profile', component: GitProfileComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'search' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GithubRoutingModule { }
