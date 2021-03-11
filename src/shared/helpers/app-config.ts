export interface IAppConfig {

}
export class AppConfig {
  constructor(args?: IAppConfig) {
    Object.keys(args)
      .forEach(key => this[key] = args[key]);
  }
}