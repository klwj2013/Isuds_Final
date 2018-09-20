import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsudsComponent } from './isuds.component';

describe('IsudsComponent', () => {
  let component: IsudsComponent;
  let fixture: ComponentFixture<IsudsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsudsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
