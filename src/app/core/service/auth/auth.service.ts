import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, Observable, of, map} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Auth, AuthResponse, emptyAuth, RegInfo, ROLE} from "../auth";
import jwt_decode from "jwt-decode";
import {tap} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _auth: Auth = emptyAuth
  private isAuthenticatedSubject: BehaviorSubject<Auth> = new BehaviorSubject<Auth>(emptyAuth);
  readonly auth$: Observable<Auth> = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) {
    const localAuth = localStorage.getItem('auth')
    if (localAuth) {
      this.auth = JSON.parse(localAuth)
    }
  }

  login(email: string, password: string): Observable<boolean> {
    return new Observable<boolean>((observer) => {

      this.http.post<AuthResponse>(`http://localhost:4231/auth/signin`, {email, password})
        .pipe(
          this.decoder(),
          tap((auth)=>{
            this.auth = auth;
          }),
          catchError((err) => {
            console.error(err)
            this.auth = emptyAuth;
            return of(this.auth)
          })
        )
        .subscribe((res) => {
          observer.next(!!res.authResponse);
          observer.complete()
        })
    })
  }

  updateRole(role: ROLE): Observable<boolean>{
    return new Observable((observer) => {
      this.http.patch<AuthResponse>(`http://localhost:4231/auth/userupdate`, {role, email: this.auth.email})
        .pipe(
          this.decoder(),
          tap((auth)=>{
            this.auth = auth;
          }),
          catchError((err) => {
            console.error(err)
            this.auth = emptyAuth;
            return of(this.auth)
          })
        )
        .subscribe((res) => {

          observer.next(!!res.authResponse);
          observer.complete()
        })
    })

  }


  logout(): void {
    console.log("logout")
    this.auth = emptyAuth;
  }



  decoder = () => {
    return map((r: AuthResponse) => {
      const {
        email,
        username,
      } = jwt_decode(r.accessToken) as { email: string, username: string }

      return {
        authResponse: r,
        username,
        email,
      }
    })
  }

  register(v:  RegInfo): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.http.post<AuthResponse>(`http://localhost:4231/auth/signup`, v)
        .pipe(
          this.decoder(),
          tap((auth)=>{
            this.auth = auth;
          }),
          catchError(err => {
            console.error(err)
            this.auth = emptyAuth;
            return of(this.auth)
          })
        ).subscribe(res => {
        observer.next(!!res.authResponse);
        observer.complete()
      })
    })
  }

  private set auth(auth: Auth) {
    console.log(`set auth`)
    console.log(auth)
    this._auth = auth
    this.isAuthenticatedSubject.next(this._auth);
    localStorage.setItem('auth', JSON.stringify(this._auth))
  }

  private get auth(): Auth {
    return this._auth;
  }

  isAuthenticated(): boolean {
    return this.auth.authResponse !== null;
  }

  checkEmail(email: string): Observable<boolean> {

    return new Observable((observer) => {
      return this.http.post<boolean>(`http://localhost:4231/auth/check-email`, {email})
        .subscribe((res: boolean) => {
          observer.next(res)
          observer.complete()
          return res
        })
    })
  }

}
