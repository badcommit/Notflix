import {Injectable} from '@angular/core';
import {BehaviorSubject,  map} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ResponseResult, Movie} from "../movie";
import {environment} from "../../../../environments/environment";



@Injectable({
  providedIn: 'root'
})

export class MovielistService {

  private movieListData: {[page: number]: Movie[]} | null = null
  private movieList: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([])
  readonly movieList$ = this.movieList.asObservable()

  private loadedPage = 1;



  constructor(private http: HttpClient) { }
  static discover_movie_url: string = 'https://api.themoviedb.org/3/discover/movie'

  loadMovieList(){

    this.http.get<ResponseResult<Movie>>(`${MovielistService.discover_movie_url}?api_key=${environment.tmdbApiKey}&page=${this.loadedPage}`)
      .pipe(
        map((response) => {
          return {
            results: response.results,
            page: this.loadedPage
          }
        })
      ).subscribe(({results, page}) => {
        if(this.movieListData === null){
          this.movieListData = {}
        }
          this.movieListData[page] = results

          const sortedPage = Object.keys(this.movieListData).sort((a, b) => Number(a) - Number(b))
          const movies = sortedPage.map((page) => this.movieListData![Number(page)]).reduce((acc, cur) => acc.concat(cur), [])
          this.movieList.next(movies)
          this.loadedPage ++;
    })


  }




}
