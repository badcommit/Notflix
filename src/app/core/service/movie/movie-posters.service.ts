import { Injectable } from '@angular/core';
import {GenericMovieItemService} from "./generic-movie-item.service";
import {Posters, RemoteResourceable} from "../movie";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MoviePostersService extends GenericMovieItemService<Posters>{

  static url: RemoteResourceable = {
    url(id: number): string {
      return `https://api.themoviedb.org/3/movie/${id}/images`
    }
  }
  constructor(http: HttpClient) {
    super(http, MoviePostersService.url)
  }
}
