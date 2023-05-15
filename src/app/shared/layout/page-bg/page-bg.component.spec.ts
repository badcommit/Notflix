import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBgComponent } from './page-bg.component';

describe('BgComponent', () => {
  let component: PageBgComponent;
  let fixture: ComponentFixture<PageBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
