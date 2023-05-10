import {Component, Input} from '@angular/core';
import {Movie} from "./movie";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  @Input()
  movie!: Movie

  constructor() {
  }

  getImgSrc(){
    return `https://image.tmdb.org/t/p/original/${this.movie.poster_path}`
  }

}
