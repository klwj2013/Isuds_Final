import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneMoreThingComponent } from './one-more-thing.component';

describe('OneMoreThingComponent', () => {
  let component: OneMoreThingComponent;
  let fixture: ComponentFixture<OneMoreThingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneMoreThingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneMoreThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
