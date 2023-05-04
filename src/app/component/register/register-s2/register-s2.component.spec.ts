import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterS2Component } from './register-s2.component';

describe('RegisterS2Component', () => {
  let component: RegisterS2Component;
  let fixture: ComponentFixture<RegisterS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterS2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
