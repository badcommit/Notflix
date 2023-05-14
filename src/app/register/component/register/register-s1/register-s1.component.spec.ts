import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterS1Component } from './register-s1.component';

describe('RegisterComponent', () => {
  let component: RegisterS1Component;
  let fixture: ComponentFixture<RegisterS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterS1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
