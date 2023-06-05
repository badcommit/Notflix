import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, Observable, of, map, Subscription, interval} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Auth, AuthToken, emptyAuth, RegInfo, ROLE} from "../auth";
import jwt_decode from "jwt-decode";
import {tap} from "rxjs/operators";
import { SERVER_ENV } from 'src/app/constant';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _auth: Auth = emptyAuth
  private isAuthenticatedSubject: BehaviorSubject<Auth> = new BehaviorSubject<Auth>(emptyAuth);
  readonly auth$: Observable<Auth> = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient ) {

  }

  init(){
    const localAuth = localStorage.getItem('auth')
    return new Promise((resolve)=>{
      if (localAuth) {
        const authItem = JSON.parse(localAuth) as Auth
        if(!authItem.authToken){
          resolve({})
        }
        const {
          email,
          username,
          tmdb_key
        } = jwt_decode(authItem!.authToken!.accessToken) as { email: string, username: string, tmdb_key: string }
  
        this.auth = {
          authToken: authItem.authToken,
          email,
          username,
          tmdb_key
        }
        this.refresh$().subscribe(()=>{
          resolve({})
        })
  
      } else {
        resolve({})
      }

    })
  }

  refresh$(): Observable<unknown>{
    if(this._auth.authToken){
      return this.http.post<AuthToken>(`${SERVER_ENV.server}/auth/refresh-token`, {
        id: 1,
        email: this._auth.email,
        tmdb_key: this._auth.tmdb_key,
        username: this._auth.username
      })
      .pipe(
        this.decoder(),
        this.saveAuth(),
        catchError(this.clearToken)
      )
    }
    return of(null)

  }

  login(email: string, password: string): Observable<boolean> {
    return new Observable<boolean>((observer) => {

      this.http.post<AuthToken>(`${SERVER_ENV.server}/auth/signin`, {email, password})
        .pipe(
          this.decoder(),
          this.saveAuth(),
          catchError(this.clearToken)
        )
        .subscribe((res) => {
          observer.next(!!res.authToken);
          observer.complete()
        })
    })
  }

  updateRole(role: ROLE): Observable<boolean>{
    return new Observable((observer) => {
      this.http.patch<AuthToken>(`${SERVER_ENV.server}/auth/userupdate`, {role, email: this.auth.email})
        .pipe(
          this.decoder(),
          this.saveAuth(),
          catchError(this.clearToken)
        )
        .subscribe((res) => {

          observer.next(!!res.authToken);
          observer.complete()
        })
    })

  }


  logout(): void {
    console.log("logout")
    this.auth = emptyAuth;
  }



  decoder = () => {
    return map((r: AuthToken) => {
      const {
        email,
        username,
        tmdb_key
      } = jwt_decode(r.accessToken) as { email: string, username: string, tmdb_key: string }

      return {
        authToken: r,
        username,
        email,
        tmdb_key
      }
    })
  }

  clearToken = () => {

    this.auth = emptyAuth;
    return of(this.auth)
  }

  saveAuth = () => {
    return tap((r: Auth) => {
      this.auth = r
    })
  }

  register(v:  RegInfo): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.http.post<AuthToken>(`${SERVER_ENV.server}/auth/signup`, v)
        .pipe(
          this.decoder(),
          this.saveAuth(),
          catchError(this.clearToken)
        ).subscribe(res => {
        observer.next(!!res.authToken);
        observer.complete()
      })
    })
  }

  private set auth(auth: Auth) {
    console.log(`set auth`)
    console.log(auth)
    this._auth = auth
    this.isAuthenticatedSubject.next(this._auth);
    localStorage.setItem('auth', JSON.stringify({authToken: this._auth.authToken}))
  }

  private get auth(): Auth {
    return this._auth;
  }

  isAuthenticated(): boolean {
    return this.auth.authToken !== null;
  }

  checkEmail(email: string): Observable<boolean> {

    return new Observable((observer) => {
      return this.http.post<boolean>(`${SERVER_ENV.server}/auth/check-email`, {email})
        .subscribe((res: boolean) => {
          observer.next(res)
          observer.complete()
          return res
        })
    })
  }

}
