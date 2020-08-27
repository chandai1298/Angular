import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var require: any;
@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.css']
})
export class Part1Component implements OnInit {
  name = 'Angular';
  constructor() { }

  ngOnInit(): void {
  }

}
