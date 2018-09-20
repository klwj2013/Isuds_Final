import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessstoryComponent } from './successstory.component';

describe('SuccessstoryComponent', () => {
  let component: SuccessstoryComponent;
  let fixture: ComponentFixture<SuccessstoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessstoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
