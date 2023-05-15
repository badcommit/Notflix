import { Injectable } from '@angular/core';
import {RemoteResourceable, Videos} from "../movie";
import {HttpClient} from "@angular/common/http";
import {GenericMovieItemService} from "./generic-movie-item.service";

@Injectable({
  providedIn: 'root'
})

export class MovieVideoService extends GenericMovieItemService<Videos>
{

  static url: RemoteResourceable = {
    url(id: number): string {
      return `https://api.themoviedb.org/3/movie/${id}/videos`
    }
  }
  constructor(http: HttpClient) {
    super(http, MovieVideoService.url)
  }
}
