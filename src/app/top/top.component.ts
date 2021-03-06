import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface Option {
  name: string;
  link: string;
}

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})

export class TopComponent implements OnInit {
  routes: any[];
  constructor() { }

  myControl = new FormControl();
  options: Option[] = [
    { name: 'Why us?', link: '/isuds' },
    { name: 'How much it cost?', link: '/pricing' },
    { name: 'Questions/Answers', link: '/faq' }
  ];
  filteredOptions: Observable<Option[]>;

  private _filter(value: string): Option[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

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

    this.filteredOptions = this.myControl.valueChanges
      .pipe(startWith(''), map(value => this._filter(value)));
  }
}
