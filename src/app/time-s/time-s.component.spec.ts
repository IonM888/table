import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSComponent } from './time-s.component';

describe('TimeSComponent', () => {
  let component: TimeSComponent;
  let fixture: ComponentFixture<TimeSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
