import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterS3Component } from './register-s3.component';

describe('RegisterS3Component', () => {
  let component: RegisterS3Component;
  let fixture: ComponentFixture<RegisterS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterS3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
