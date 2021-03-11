import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { AppConfig } from '@helpers/app-config'
import { IHttpRequest } from '@helpers/http-request'
import { Observable } from 'rxjs'

@Injectable()
export class NetworkService {
  constructor(private http: HttpClient, private args?: AppConfig) { }
  public get<T>(body: IHttpRequest): Observable<T> {
    return this.http
      .get<T>(body.provider + body.path ? `/${body.path}` : '', { params: body.params });
  }
}
