import { MessageService       } from 'primeng/api'
import { InputTextModule      } from 'primeng/inputtext'
import { AccountRoutingModule } from '@account/account-routing.module'
import { AccountComponent     } from '@account/account.component'
import { CommonModule         } from '@angular/common'
import { NgModule             } from '@angular/core'
import { ReactiveFormsModule  } from '@angular/forms'

const components = [AccountComponent];

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
  ],
  providers: [MessageService],
  declarations: components,
  exports: components,
})
export class AccountModule { }
