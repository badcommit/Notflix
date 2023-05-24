import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
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
    console.log("intercept")
    console.log(request.url)
    if(this.matchUrl(request.url) && this.authService.auth.authResponse?.accessToken){
      modifiedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.auth.authResponse?.accessToken}`
        }
      });

    }
    return next.handle(modifiedRequest).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // Log or perform additional operations on the response
          console.log('Response intercepted:', event);
        }
      }),
      catchError((error: HttpErrorResponse) => {
        // Handle error responses
        console.error('Error intercepted:', error);

        // Forward the error to the caller
        return throwError(error);
      })
    );
  }
}
