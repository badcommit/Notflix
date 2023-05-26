import {
  ChangeDetectorRef,
  Component, Input, OnDestroy,
  OnInit, ViewChild,
} from '@angular/core';
import {interval, map, Observable, Subscription} from "rxjs";
import {tap} from "rxjs/operators";

export interface Slide {
  src: string,
  title?: string,

}

@Component({
  selector: 'app-movie-carousel',
  templateUrl: `movie-carousel.component.html`,
  styleUrls: ['./movie-carousel.component.scss'],
})
export class MovieCarouselComponent implements OnInit, OnDestroy {

  @ViewChild('prev', {static: true}) prev: any
  @ViewChild('next', {static: true}) next: any
  @ViewChild('cur', {static: true}) cur: any

  @Input()
  slides!: Slide[]

  pointer = 0;
  interval!: Subscription

  height = 800
  top:number = 0
  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.interval = interval(5000).pipe(
      tap(() => {

        this.top -= this.height +10
        this.pointer += 1
        if(this.top <= -this.height * this.slides.length){
          this.top = 0
          this.pointer = 0
        }

        this.changeDetector.detectChanges()
      })
    ).subscribe()
  }

  ngOnDestroy(): void {
    this.interval.unsubscribe()
  }
}
