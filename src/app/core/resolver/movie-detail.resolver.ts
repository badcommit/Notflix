import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {forkJoin, Observable, delay} from "rxjs";
import {MovieRelatedItems} from "../service/movie";
import {MovieDetailService} from "../service/movie/movie-detail.service";
import {MovieVideoService} from "../service/movie/movie-video.service";
import {MovieCreditService} from "../service/movie/movie-credit.service";
import {MoviePostersService} from "../service/movie/movie-posters.service";

@Injectable({ providedIn: 'root' })
export class MovieDetailResolver implements Resolve<MovieRelatedItems> {
  constructor(
    private movieDetailService: MovieDetailService,
    private movieVideoService: MovieVideoService,
    private movieCreditService: MovieCreditService,
    private moviePosterService: MoviePostersService
  ) {

  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<MovieRelatedItems> {
    //since the router is not activated yet
    //so we basically need to parse by ourself
    const url_segs = state.url.split("/")
    const ids = url_segs[url_segs.length-1]
    const id = Number.parseInt(ids)
    const detail$ = this.movieDetailService.load(id)
    const video$ = this.movieVideoService.load(id)
    const credit$ = this.movieCreditService.load(id)
    const posters$ = this.moviePosterService.load(id)
    return forkJoin({
      detail: detail$,
      videos: video$,
      credit: credit$,
      posters: posters$
    }).pipe(
      delay(1000)
    )
  }
}
