import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MovielistService} from "../../core/service/movie/movielist.service";
import {first, Subscription, take} from "rxjs";
import {Movie} from "../../core/service/movie";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movielist-page',
  templateUrl: './movielist-page.component.html',
  styleUrls: ['./movielist-page.component.scss']
})
export class MovielistPageComponent implements OnInit, OnDestroy {


  movieListSubscription!: Subscription
  movies: Movie[] = []

  loadingStatus: { [key: number]: boolean } = {}

  fragmentSubscription!: Subscription

  constructor(private movieService: MovielistService, private router: Router) {

  }

  ngOnInit() {
    this.movieListSubscription = this.movieService.movieList$.subscribe((v) => {
      this.movies = v
    })

    this.movieService.loadMovieList()

  }



  async select(movie: Movie) {
    this.loadingStatus[movie.id] = true

    await this.router.navigate([`/movie/${movie.id}`])
    this.loadingStatus[movie.id] = false
  }

  onScroll() {
    this.movieService.loadMovieList()

  }


  ngOnDestroy() {
    this.movieListSubscription.unsubscribe()
    //this.fragmentSubscription.unsubscribe()
  }
}
