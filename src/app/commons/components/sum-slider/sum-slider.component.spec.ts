import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumSliderComponent } from './sum-slider.component';

describe('SumSliderComponent', () => {
  let component: SumSliderComponent;
  let fixture: ComponentFixture<SumSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SumSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SumSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
