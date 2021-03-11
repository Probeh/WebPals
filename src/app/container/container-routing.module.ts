import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from '@services/account.guard'

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], loadChildren: () => import('../github/github.module').then(m => m.GithubModule) },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }
