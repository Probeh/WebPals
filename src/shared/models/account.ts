export interface IAccountModel {
  name?: string;
  pass?: string;
  user?: string;
  state?: boolean;
  rememberMe?: boolean;
}
export class AccountModel {
  public name: string;
  public pass: string;
  public user: string;
  public state: boolean;
  public rememberMe: boolean;

  constructor(args?: IAccountModel) {
    Object.keys(args)
      .forEach(key => this[key] = args[key]);
  }
}
