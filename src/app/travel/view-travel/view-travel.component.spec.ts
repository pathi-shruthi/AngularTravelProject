import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTravelComponent } from './view-travel.component';

describe('ViewTravelComponent', () => {
  let component: ViewTravelComponent;
  let fixture: ComponentFixture<ViewTravelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTravelComponent]
    });
    fixture = TestBed.createComponent(ViewTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
