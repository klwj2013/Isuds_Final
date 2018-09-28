import { fade } from './../animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fade]
})
export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}
