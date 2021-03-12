import { BadgeModule         } from 'primeng/badge'
import { ButtonModule        } from 'primeng/button'
import { InputTextModule     } from 'primeng/inputtext'
import { ProgressBarModule   } from 'primeng/progressbar'
import { RatingModule        } from 'primeng/rating'
import { TableModule         } from 'primeng/table'
import { CommonModule        } from '@angular/common'
import { NgModule            } from '@angular/core'
import { FormsModule         } from '@angular/forms'
import { GitProfileComponent } from '@github/git-profile/git-profile.component'
import { GitResultComponent  } from '@github/git-result/git-result.component'
import { GitSearchComponent  } from '@github/git-search/git-search.component'
import { GithubRoutingModule } from '@github/github-routing.module'
import { GithubComponent     } from '@github/github.component'

const components = [GithubComponent, GitSearchComponent, GitProfileComponent, GitResultComponent]

@NgModule({
  imports: [
    CommonModule,
    GithubRoutingModule,
    BadgeModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    ProgressBarModule,
    RatingModule,
    TableModule,
  ],
  declarations: components,
  exports: components,
})
export class GithubModule { }
