import { Injectable } from '@angular/core';
import {GenericMovieItemService} from "./generic-movie-item.service";
import {RemoteResourceable, Credit} from "../movie";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class MovieCreditService extends GenericMovieItemService<Credit>
{

  static url: RemoteResourceable = {
    url(id: number): string {
      return `https://api.themoviedb.org/3/movie/${id}/credits`
    }
  }
  constructor(http: HttpClient) {
    super(http, MovieCreditService.url)
  }
}
