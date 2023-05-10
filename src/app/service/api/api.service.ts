import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {interval, Observable, take, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  checkEmail(email: string): Observable<boolean> {

    return interval(1000).pipe(
      take(1),
      map(_ => {
        return email.includes('z')
      })
    )
  }
}
