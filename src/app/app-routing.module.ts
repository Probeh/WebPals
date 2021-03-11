import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@services/account.guard';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  { path: '', canActivate: [AuthGuard], loadChildren: () => import('./container/container.module').then(m => m.ContainerModule) },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
