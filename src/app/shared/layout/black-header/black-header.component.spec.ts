import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackHeaderComponent } from './black-header.component';

describe('BlackHeaderComponent', () => {
  let component: BlackHeaderComponent;
  let fixture: ComponentFixture<BlackHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlackHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
