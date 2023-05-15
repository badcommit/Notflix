import {Observable, of, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {IDCached, RemoteResourceable} from "../movie";



export class GenericMovieItemService<T extends {}> {

  private movieItemCached: IDCached<T> = {}
  constructor(private http: HttpClient, private remoteResource: RemoteResourceable) {

  }

  load(id: number): Observable<T>{
    if (!this.movieItemCached[id]) {
      return new Observable<T>((observer) => {
        this.http.get<T>(`${this.remoteResource.url(id)}?api_key=${environment.tmdbApiKey}`).pipe(
          tap((v: T) => {
            this.movieItemCached = {
              ...this.movieItemCached,
              [+id]: v
            }
          })
        ).subscribe(v => {
          observer.next(v)
          observer.complete()
        })
      })

    } else {
      return of(this.movieItemCached[id])
    }

  }
}
