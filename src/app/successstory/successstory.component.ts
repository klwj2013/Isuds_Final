import { fade } from './../animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successstory',
  templateUrl: './successstory.component.html',
  styleUrls: ['./successstory.component.css'],
  animations: [fade]
})
export class SuccessstoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
