import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { GetDataserviesService } from '../../../services/dataservies/get-dataservies.service';
import {
  NgbCarouselConfig,
  NgbSlideEvent,
  NgbCarousel,
} from '@ng-bootstrap/ng-bootstrap';
import { timer } from 'rxjs';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.css'],
  providers: [NgbCarouselConfig],
})
export class Part2Component implements OnInit {
  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;
  playeraudio: any;

  favoriteSeason: string;
  soundsrc: string;
  tmps: any;
  time: number = 15000;
  ngOnInit(): void {
    this.onSubmit();
  }
  @ViewChild('audioplay', { read: ElementRef, static: false })
  audioplay: ElementRef;
 

  onSubmit() {
    this.service.getListQuestion().subscribe((data) => {
      console.log(data);
      this.tmps = data;
      this.playeraudio = this.audioplay.nativeElement;
      this.playeraudio.src = this.tmps[0]['sound'];
      this.playeraudio.play();
      // new Audio(this.tmps[0]['sound']).onloadedmetadata = (e:any) =>{
      //   this.time = Math.ceil(e.currentTarget.duration)*1000;
      // }
      // this.interval = this.time;
    });
  }
  ngAfterViewInit() {
    console.log('afterinit');
    console.log('Values on ngAfterViewInit():');
    // this.startTimer();
    // console.log("sample:", this.image.nativeElement.values());

    // setTimeout(() => {
    //   this.playeraudio = this.audioplay.nativeElement;
    // }, 1000);
  }

  showNavigationArrows = false;
  showNavigationIndicators = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: GetDataserviesService,
    config: NgbCarouselConfig
  ) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
  i: number = 1;

  intervals = {
    'slide-0': 30000,
    'slide-1': 30000,
    'slide-2': 30000,
    'slide-3': 30000,
    'slide-4': 30000,
  };

  interval = 30000;
  timeLeft: number = 20;
  intervalT;
  onSlideChange(event) {
    // this.interval = Math.ceil(this.audioplay.nativeElement.duration + 5) * 1000;

    // console.log(this.time);
    // this.interval = this.time;
    // this.i = (this.i +1)%5;
    this.playeraudio.src = event.current;
      this.playeraudio.play();
    // this.startTimer();
    // clearInterval(this.intervalT);
  }

  playTrack(previewUrl) {
    this.playeraudio.src = previewUrl;
    this.playeraudio.play();
  }

  pauseTrack() {
    this.playeraudio.pause();
  }

  playerEnded() {
    this.delay(5000).then((any) => {
      //your task after delay.
      this.carousel.next();
    });
  }

  playerDuration() {
    return this.playeraudio.duration;
  }
  gettmps(): any {
    return this.tmps;
  }
  async delay(ms: number) {
    await new Promise((resolve) => setTimeout(() => resolve(), ms)).then(() =>
      console.log('fired')
    );
  }
  startTimer() {
    this.intervalT = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft=20;
        this.carousel.next();
      }
    }, 1000);
  }
}
