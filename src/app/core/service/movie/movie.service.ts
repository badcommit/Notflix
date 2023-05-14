import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, debounce, debounceTime, interval, map, Subject, tap, throttle} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {DiscoverMovieListResult, Movie} from "../movie";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieListData: Movie[] | null = null
  private movieList: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([])
  readonly movieList$ = this.movieList.asObservable()
  constructor(private http: HttpClient) { }
  static url: string = 'https://api.themoviedb.org/3/discover/movie'
  load(){
    if(!this.movieListData){
      this.http.get<DiscoverMovieListResult>(`${MovieService.url}?api_key=${environment.tmdbApiKey}`)
        .pipe(
          map((x: DiscoverMovieListResult) => x.results)
        ).subscribe((v) => {
          this.movieListData = v
          this.movieList.next(this.movieListData)
      })
    }
  }



}
