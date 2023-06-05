import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import {flatMap, map, Observable, take, throwError} from 'rxjs';
import {AuthService} from "../service/auth/auth.service";

@Injectable()
export class TokenHttpInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {

  }

  matchUrl(url: string): boolean {
    const regex = /\/userupdate/;
    return regex.test(url);
  }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Modify the request here if needed
    // For example, you can add headers or authentication tokens
    let modifiedRequest = request;


    return this.authService.auth$.pipe(
      take(1),
      map(auth => {
        if(this.matchUrl(request.url) && auth.authToken?.accessToken){
          modifiedRequest = request.clone({
            setHeaders: {
              Authorization: `Bearer ${auth.authToken?.accessToken}`
            }
          });
          return modifiedRequest;
        }
        return request;
      }),
      flatMap(req => next.handle(req))

    )
  }
}
