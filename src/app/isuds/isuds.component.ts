import { fade } from './../animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-isuds',
  templateUrl: './isuds.component.html',
  styleUrls: ['./isuds.component.css'],
  animations: [fade]
})
export class IsudsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
