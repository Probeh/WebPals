import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { GitProfileComponent } from '@github/git-profile/git-profile.component'
import { GitSearchComponent } from '@github/git-search/git-search.component'

const routes: Routes = [
  { path: 'search', component: GitSearchComponent },
  { path: 'profile', component: GitProfileComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'search' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class GithubRoutingModule { }
