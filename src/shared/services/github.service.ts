import { Injectable } from '@angular/core'
import { AppConfig } from '@helpers/app-config';

@Injectable()
export class GithubService {
  constructor(private args?: AppConfig) { }
}
