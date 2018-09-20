import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyisudsComponent } from './whyisuds.component';

describe('WhyisudsComponent', () => {
  let component: WhyisudsComponent;
  let fixture: ComponentFixture<WhyisudsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyisudsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyisudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
