import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
  
  user: any;

  constructor() {
    this.user = { name: 'Foo Bar',
    title:'Software Developer',
    address:'7050 Washbrook Ter, Glen Allen, VA, 23059',
    
    phone: [
      '617-513-5767','123-123-1234','321-321-3214']
    };
   }

  ngOnInit() {
  }

}
