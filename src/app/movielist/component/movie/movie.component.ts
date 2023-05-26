import {Component, Input} from '@angular/core';
import {Movie} from "../../../core/service/movie";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  @Input()
  movie!: Movie

  isHover: boolean = false

  @Input()
  isLoadingToDetail: boolean = false

  constructor() {
  }

  hover(hover_state: boolean){
    this.isHover = hover_state
  }
  get overview(){
    return this.movie.overview.split(" ").slice(0, 15).join(" ") + '...'
  }
  getImgSrc(){
    return `https://image.tmdb.org/t/p/original/${this.movie.poster_path}`
  }

}
