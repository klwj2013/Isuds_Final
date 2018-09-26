import { fade } from './../animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
  animations: [fade]
})
export class PricingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
