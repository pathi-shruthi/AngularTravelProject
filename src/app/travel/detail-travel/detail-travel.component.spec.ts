import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTravelComponent } from './detail-travel.component';

describe('DetailTravelComponent', () => {
  let component: DetailTravelComponent;
  let fixture: ComponentFixture<DetailTravelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailTravelComponent]
    });
    fixture = TestBed.createComponent(DetailTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
