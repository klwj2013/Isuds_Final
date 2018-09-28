import { fade } from './../animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [fade]
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
