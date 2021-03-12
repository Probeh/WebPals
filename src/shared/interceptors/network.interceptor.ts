import { Observable } from 'rxjs'
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Providers } from '@enums/provider.enum'
import { endpoints } from '@env/environment'

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes(Providers.Github)) {
      req = req.clone({
        url: `${endpoints.github.baseUrl}${req.url.split(Providers.Github)[1]}`
      })
    }
    return next.handle(req);
  }
}