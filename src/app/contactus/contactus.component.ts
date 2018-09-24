import { fade } from './../animations';
import { Component, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
  animations: [fade]
})
export class ContactusComponent implements OnInit {

  foods: Food[] = [
    {value: 'info', viewValue: 'Request information'},
    {value: 'demo', viewValue: 'Request a demo'},
    {value: 'contact', viewValue: 'Contact me'},
  ];

  public selected2 = this.foods[0];

  constructor() { }

  ngOnInit() {
  }

}
