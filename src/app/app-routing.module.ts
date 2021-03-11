import { NgModule             } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard            } from '@services/account.guard'
import { SessionGuard         } from '@services/session.guard'

const routes: Routes = [
  { path: 'auth', canActivate: [SessionGuard], loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  { path: 'search', canActivate: [AuthGuard], loadChildren: () => import('./github/github.module').then(m => m.GithubModule) },
  { path: '**', pathMatch: 'full', redirectTo: 'search' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
