import {Injectable} from '@angular/core';
import {BehaviorSubject,  map} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ResponseResult, Movie} from "../movie";
import {environment} from "../../../../environments/environment";



@Injectable({
  providedIn: 'root'
})

export class MovielistService {

  private movieListData: Movie[] | null = null
  private movieList: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([])
  readonly movieList$ = this.movieList.asObservable()



  constructor(private http: HttpClient) { }
  static discover_movie_url: string = 'https://api.themoviedb.org/3/discover/movie'

  loadMovieList(){
    if(!this.movieListData){
      this.http.get<ResponseResult<Movie>>(`${MovielistService.discover_movie_url}?api_key=${environment.tmdbApiKey}`)
        .pipe(
          map((response) => response.results)
        ).subscribe((v) => {
            this.movieListData = v
            this.movieList.next(this.movieListData!)
      })
    }
  }




}
