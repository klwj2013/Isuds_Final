import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-testdisplay',
  templateUrl: './testdisplay.component.html',
  styleUrls: ['./testdisplay.component.css']
})
export class TestdisplayComponent implements OnInit {

  routes: any[];
  constructor() { }

  ngOnInit() {
   this.routes=[
    {linkName: 'Home', url: '/home',children:[]},
    {linkName: 'The Product', url: '/product',children:[]},
    {linkName: 'Why iSuds', url: '',children:[
      {linkName:'iSuds Experience', url:'/whyisuds/experience', children:[]},
      {linkName:'Pricing', url:'/whyisuds/pricing', children:[]},
      {linkName:'FAQ', url:'/whyisuds/faq', children:[]},
      {linkName:'One More Thing', url:'/whyisuds/omt', children:[]}
    ]},
    {linkName: 'Success Stories', url: '/successstory',children:[]},
    {linkName: 'Contact Us', url: '/contact',children:[]}
   ]

  }
}
