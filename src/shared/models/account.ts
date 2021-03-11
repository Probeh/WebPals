export interface IAccountModel {
  name: string;
  pass: string;
  user?: string;
}
export class AccountModel {
  public name: string;
  public pass: string;
  public user: string;
  constructor(args?: IAccountModel) {
    Object.keys(args)
      .forEach(key => this[key] = args[key]);
  }
}
