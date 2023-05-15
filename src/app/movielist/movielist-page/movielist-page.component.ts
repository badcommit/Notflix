import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovielistService} from "../../core/service/movie/movielist.service";
import {Subscription} from "rxjs";
import {Movie} from "../../core/service/movie";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movielist-page',
  templateUrl: './movielist-page.component.html',
  styleUrls: ['./movielist-page.component.scss']
})
export class MovielistPageComponent implements OnInit, OnDestroy{

  movieListSubscription!: Subscription
  movies: Movie[] = []

  loadingStatus: {[key: number]: boolean} = {}

  constructor(private movieService: MovielistService, private router: Router) {

  }
  ngOnInit() {
    this.movieListSubscription = this.movieService.movieList$.subscribe((v) => {
      this.movies = v
    })

    this.movieService.loadMovieList()
  }

  async select(movie: Movie){
    this.loadingStatus[movie.id] = true
    await this.router.navigate([`/movie/${movie.id}`])
    this.loadingStatus[movie.id] = false
  }

  ngOnDestroy(){
    this.movieListSubscription.unsubscribe()
  }
}
