import { fade } from './../animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-more-thing',
  templateUrl: './one-more-thing.component.html',
  styleUrls: ['./one-more-thing.component.css'],
  animations: [fade]
})
export class OneMoreThingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
