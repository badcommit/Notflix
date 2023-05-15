import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Movie, RemoteResourceable} from "../movie";
import {GenericMovieItemService} from "./generic-movie-item.service";

@Injectable({
  providedIn: 'root'
})
export class MovieDetailService extends GenericMovieItemService<Movie>{

  static url: RemoteResourceable = {
    url(id: number): string {
      return `https://api.themoviedb.org/3/movie/${id}`
    }
  }
  constructor(http: HttpClient) {
    super(http, MovieDetailService.url)
  }

}
