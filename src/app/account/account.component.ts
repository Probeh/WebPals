import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { MessageType } from '@enums/message.enum'
import { IAccountModel } from '@models/account'
import { IdentityService } from '@services/account.service'
import { MessageService } from '@services/message.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(private identtiy: IdentityService, private message: MessageService) { this.initForm(); }
  ngOnInit() { }
  private initForm() {
    this.loginForm = new FormGroup({
      'user': new FormControl('', Validators.required),
      'pass': new FormControl('', Validators.required),
      'rememberMe': new FormControl(true)
    })
  }
  public onLogin() {
    this.identtiy
      .userLogin(this.loginForm.value)
      .then((result: IAccountModel) => {
        this.message.show('Logged In!', `Welcome ${result.name}`, MessageType.Success);
        this.initForm();
      })
      .catch((error: Error) => {
        this.loginForm.setErrors({ credentials: error.message });
        this.loginForm.controls.user.setErrors({ username: 'Invalid username' });
        this.loginForm.controls.pass.setErrors({ password: 'Invalid password' });

        this.message.show('Login Failed', error.message, MessageType.Error);
      });
  }
}
