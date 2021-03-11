import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from '@account/account.component';
import { AccountRoutingModule } from '@account/account-routing.module';

const components = [AccountComponent];

@NgModule({
  imports: [CommonModule, AccountRoutingModule],
  declarations: components,
  exports: components,
})
export class AccountModule { }
