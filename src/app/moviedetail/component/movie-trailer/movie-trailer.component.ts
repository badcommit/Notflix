import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {YouTubePlayer} from "@angular/youtube-player";

@Component({
  selector: 'app-movie-trailer',
  templateUrl: './movie-trailer.component.html',
  styleUrls: ['./movie-trailer.component.scss']
})
export class MovieTrailerComponent implements OnInit, OnDestroy{

  apiLoaded = false;

  tag!: HTMLScriptElement;

  @ViewChild('ytv', {static: true}) videoplayer!: YouTubePlayer;
  @Input()
  videoId!: string
    constructor() {
    }

    ngOnInit() {
      if (!this.apiLoaded) {
        // This code loads the IFrame Player API code asynchronously, according to the instructions at
        // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
        this.tag = document.createElement('script');
        this.tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(this.tag);
        this.apiLoaded = true;
      }
    }

    ngOnDestroy() {
      this.tag.remove()
    }


}
