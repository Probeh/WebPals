import { ToastrModule            } from 'ngx-toastr'
import { NgModule                } from '@angular/core'
import { BrowserModule           } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule        } from '@client/app-routing.module'
import { AppComponent            } from '@client/app.component'
import { ContainerModule         } from '@container/container.module'
import { AuthGuard               } from '@services/account.guard'
import { IdentityService         } from '@services/account.service'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    ContainerModule.forRoot({
      expandSidenav: true
    }),
  ],
  providers: [IdentityService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
