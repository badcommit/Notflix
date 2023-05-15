import {Component, OnInit, Input, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-movie-dialog',
  templateUrl: './movie-dialog.component.html',
  styleUrls: ['./movie-dialog.component.scss']
})
export class MovieDialogComponent implements OnInit {
  @Input()
  videoIds: string[] = []
  videoIndex: number | null = null

  constructor(@Inject(MAT_DIALOG_DATA) private data: string[]) {
  }

  ngOnInit() {
    this.videoIds = this.data
    this.videoIndex = this.data.length >0 ? 0 : null
  }

  prev(){
    if(this.videoIndex !== null && this.videoIndex > 0){
      this.videoIndex--
    }
  }

  next(){
    if(this.videoIndex !== null && this.videoIndex < this.videoIds.length - 1){
      this.videoIndex++
    }
  }
}
