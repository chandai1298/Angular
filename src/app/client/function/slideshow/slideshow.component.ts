import { Component, OnInit, ContentChildren, QueryList, AfterContentInit, ViewChildren, AfterViewInit } from '@angular/core';
  import { SlideshowitemComponent } from '../slideshowitem/slideshowitem.component';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {
    slides = ["Here is "+
   ' PS F:\FinallyYear\token\re\Angular> ng s'+
    
    'chunk {main} main.js, main.js.map (main) 276 kB [initial] [rendered]'+
    'chunk {polyfills} polyfills.js, polyfills.js.map (polyfills) 141 kB [initial] [rendered]'+
   ' chunk {runtime} runtime.js, runtime.js.map (runtime) 6.15 kB [entry] [rendered]'+
    'chunk {styles} styles.js, styles.js.map (styles) 165 kB [initial] [rendered]'+
   ' chunk {vendor} vendor.js, vendor.js.map (vendor) 4.6 MB [initial] [rendered]'+
    'Date: 2020-08-12T04:55:22.546Z - Hash: 9c3af00d3324d9c1245c - Time: 29916ms'+
    '** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **'+
    ": Compiled successfully.", "Here is slide 2", "Here is slide 3", "Questions?"];
    activeSlide = 0;
  
    @ViewChildren(SlideshowitemComponent) scrollItems: QueryList<SlideshowitemComponent>;
  
    constructor() {
      //this.slides = this.slides.reverse();
    }
  
    ngOnInit() {
      console.log("Slides : ");
      console.log(this.slides);
    }
  
    ngAfterViewInit() {
      var self = this;
      setTimeout(function () {
        self.scrollItems.toArray()[self.activeSlide].toggle(1);
      }, 0);
    }
  
    onMouseWheelUpFunc() {
      console.log("Scrolled up?" + this.activeSlide);
      if (this.activeSlide > 0) {
        this.scrollItems.toArray()[this.activeSlide].toggle(-1);
        if (this.activeSlide >= 1)
          this.scrollItems.toArray()[--this.activeSlide].toggle(-1);
        else
          this.resetToEnd();
      } else {
        this.resetToEnd();
      }
    }
  
    onMouseWheelDownFunc() {
      console.log("Scrolled down?" + this.activeSlide);
      if (this.activeSlide < (this.slides.length)) {
        this.scrollItems.toArray()[this.activeSlide].toggle(1);
        if (this.activeSlide < this.slides.length - 1)
          this.scrollItems.toArray()[++this.activeSlide].toggle(1);
        else { this.resetToBeginning(); }
      } else {
        this.resetToBeginning();
      }
    }
  
    resetToEnd() {
      console.log('Reached the beginning !' + this.activeSlide + ":" + this.slides.length);
      this.resetAll();
      this.activeSlide = this.slides.length - 1;
      this.scrollItems.toArray()[this.activeSlide].toggle(-1);
    }
    resetToBeginning() {
      console.log('Reached the end!' + this.activeSlide + ":" + this.slides.length);
      this.resetAll();
      this.activeSlide = 0;
      this.scrollItems.toArray()[this.activeSlide].toggle(1);
    }
  
    resetAll() {
      this.scrollItems.forEach(item => {
        item.reset();
      });
    }
  
  }
  