import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  routes: any[];
  constructor() { }

  ngOnInit() {
    this.routes = [
      { linkName: 'Home', url: '/home', children: [] },
      { linkName: 'The Product', url: '/product', children: [] },
      {
        linkName: 'Why iSuds', url: '/whyisuds', children: [
          { linkName: 'iSuds Experience', url: '/isuds', children: [] },
          { linkName: 'Pricing', url: '/pricing', children: [] },
          { linkName: 'FAQ', url: '/faq', children: [] },
          { linkName: 'One More Thing', url: '/one-more-thing', children: [] }
        ]
      },
      { linkName: 'Success Stories', url: '/successstory', children: [] },
      { linkName: 'Contact Us', url: '/contact', children: [] }
    ]
  }
}
