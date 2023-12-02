import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewemployeeComponent } from './view-emp.component';

describe('ViewEmpComponent', () => {
  let component: ViewemployeeComponent;
  let fixture: ComponentFixture<ViewemployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewemployeeComponent]
    });
    fixture = TestBed.createComponent(ViewemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
