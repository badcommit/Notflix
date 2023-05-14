import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieService} from "../../core/service/movie/movie.service";
import {Subscription} from "rxjs";
import {Movie} from "../../core/service/movie";

@Component({
  selector: 'app-movielist-page',
  templateUrl: './movielist-page.component.html',
  styleUrls: ['./movielist-page.component.scss']
})
export class MovielistPageComponent implements OnInit, OnDestroy{

  movieListSubscription!: Subscription
  movies: Movie[] = []

  constructor(private movieService: MovieService) {

  }
  ngOnInit() {
    this.movieListSubscription = this.movieService.movieList$.subscribe((v) => {
      this.movies = v
    })

    this.movieService.load()
  }

  ngOnDestroy(){
    this.movieListSubscription.unsubscribe()
  }
}
