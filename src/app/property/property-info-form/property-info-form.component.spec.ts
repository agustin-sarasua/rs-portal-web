import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyInfoFormComponent } from './property-info-form.component';

describe('PropertyInfoFormComponent', () => {
  let component: PropertyInfoFormComponent;
  let fixture: ComponentFixture<PropertyInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
