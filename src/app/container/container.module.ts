import { CommonModule } from '@angular/common'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { ModuleWithProviders, NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { ContainerComponent } from '@container/container.component'
import { NavbarComponent } from '@container/navbar/navbar.component'
import { SidenavComponent } from '@container/sidenav/sidenav.component'
import { AppConfig } from '@helpers/app-config'
import { IdentityInterceptor } from '@interceptors/account.interceptor'
import { NetworkInterceptor } from '@interceptors/network.interceptor'
import { AuthGuard } from '@services/account.guard'
import { ContainerService } from '@services/container.service'
import { GithubService } from '@services/github.service'
import { NetworkService } from '@services/network.service'

const components = [
  ContainerComponent,
  NavbarComponent,
  SidenavComponent
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: components,
  providers: [
    GithubService,
    NetworkService,
    ContainerService
  ],
  exports: components,
})
export class ContainerModule {
  static forRoot(args?: AppConfig): ModuleWithProviders<ContainerModule> {
    return {
      ngModule: ContainerModule,
      providers: [
        { provide: AppConfig, useValue: args },
        { provide: HTTP_INTERCEPTORS, useClass: IdentityInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: NetworkInterceptor, multi: true },
        GithubService,
        NetworkService,
        ContainerService
      ]
    };
  }
}