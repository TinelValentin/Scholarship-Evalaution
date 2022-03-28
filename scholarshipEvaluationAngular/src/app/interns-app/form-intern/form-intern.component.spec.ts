import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInternComponent } from './form-intern.component';

describe('FormInternComponent', () => {
  let component: FormInternComponent;
  let fixture: ComponentFixture<FormInternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
