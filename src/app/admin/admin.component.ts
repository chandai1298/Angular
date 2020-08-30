import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  name:string;
  constructor() { }

  ngOnInit() {
    this.name =localStorage.getItem('name');
  }

}
