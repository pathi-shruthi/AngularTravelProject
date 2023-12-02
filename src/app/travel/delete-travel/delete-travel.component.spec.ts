import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTravelComponent } from './delete-travel.component';

describe('DeleteTravelComponent', () => {
  let component: DeleteTravelComponent;
  let fixture: ComponentFixture<DeleteTravelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteTravelComponent]
    });
    fixture = TestBed.createComponent(DeleteTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
