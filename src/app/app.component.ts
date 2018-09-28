import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  title = 'Simple Example';
  public data: any = []

  reason = '';
  routes: any[];

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
    ];
  }

  close() {
    this.sidenav.close();
  }
}
