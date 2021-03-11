export interface IAppConfig {
  expandSidenav: boolean;

}
export class AppConfig {
  public expandSidenav: boolean;
  constructor(args?: IAppConfig) {
    Object.keys(args)
      .forEach(key => this[key] = args[key]);
  }
}