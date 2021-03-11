import { CommonModule } from '@angular/common'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ModuleWithProviders, NgModule } from '@angular/core'
import { ContainerRoutingModule } from '@container/container-routing.module'
import { ContainerComponent } from '@container/container.component'
import { AppConfig } from '@helpers/app-config'
import { IdentityInterceptor } from '@interceptors/account.interceptor'
import { NetworkInterceptor } from '@interceptors/network.interceptor'
import { IdentityService } from '@services/account.service'
import { GithubService } from '@services/github.service'
import { NetworkService } from '@services/network.service'
import { StorageService } from '@services/storage.service'

const components = [ContainerComponent];

@NgModule({
  imports: [CommonModule, ContainerRoutingModule, HttpClientModule,],
  declarations: components,
  exports: components,
  providers: [
    IdentityService,
    GithubService,
    NetworkService,
    StorageService
  ]
})
export class ContainerModule {
  static forRoot(args?: AppConfig): ModuleWithProviders<ContainerModule> {
    return {
      ngModule: ContainerModule,
      providers: [
        { provide: AppConfig, useValue: args },
        { provide: HTTP_INTERCEPTORS, useClass: IdentityInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: NetworkInterceptor, multi: true },
        IdentityService,
        GithubService,
        NetworkService,
        StorageService
      ]
    };
  }
}