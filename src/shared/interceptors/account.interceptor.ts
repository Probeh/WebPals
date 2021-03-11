import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Providers } from '@enums/provider.enum'

@Injectable()
export class IdentityInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const original = req.clone();
    const username = original.url.split(`${Providers.Identity}/`)[1];

    if (req.url.startsWith(Providers.Identity)) {
      req = req.clone({
        url: './assets/accounts.json'
      });
    }
    return next.handle(req)
      .pipe(
        map(result => {
          if (result instanceof HttpResponse) {
            if (original.url.startsWith(Providers.Identity)) {
              return new HttpResponse({ body: result.body[username] });
            }
          }
          return result;
        })
      );
  }
}
