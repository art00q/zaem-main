import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantagesSliderComponent } from './advantages-slider.component';

describe('AdvantagesSliderComponent', () => {
  let component: AdvantagesSliderComponent;
  let fixture: ComponentFixture<AdvantagesSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvantagesSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvantagesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
