import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Credit, Movie, MovieRelatedItems, Posters, Videos} from "../../core/service/movie";
import {MatDialog} from "@angular/material/dialog";
import {MovieDialogComponent} from "../component/movie-dialog/movie-dialog.component";

@Component({
  selector: 'app-movie-detail-page',
  templateUrl: './movie-detail-page.component.html',
  styleUrls: ['./movie-detail-page.component.scss']
})
export class MovieDetailPageComponent implements OnInit, OnDestroy {

  id!: number

  videos?: Videos

  credit?: Credit

  detail?: Movie

  poster?: Posters



  constructor(private route: ActivatedRoute,
              private dialog: MatDialog,
  ) {
  }

  ngOnInit() {

    this.id = this.route.snapshot.params.id

    const data = this.route.snapshot.data.movieDetail as MovieRelatedItems
    this.credit = data.credit
    this.detail = data.detail
    this.poster = data.posters
    this.videos = data.videos

  }

  ngOnDestroy(){

  }

  getBgImageUrl(){
    return `url(https://image.tmdb.org/t/p/original${this.detail?.backdrop_path})`
  }

  getImageUrl(post_url: string): string{
    return `https://image.tmdb.org/t/p/original${post_url}`
  }

  openDialog(){
    const videoIds  = this.videos?.results
      .filter(v => !!v.key && v.site==="YouTube")
      .map((v) => v.key) ?? []
    this.dialog.open(MovieDialogComponent, {
      data: [
        ...videoIds
      ]
    })
  }
}
