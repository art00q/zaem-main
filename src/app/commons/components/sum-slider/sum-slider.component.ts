import { Component, Input } from '@angular/core';
import { MatSliderDragEvent } from '@angular/material/slider';

@Component({
  selector: 'app-sum-slider',
  standalone: false,
  
  templateUrl: './sum-slider.component.html',
  styleUrl: './sum-slider.component.scss'
})
export class SumSliderComponent {
  @Input() amount: number = 30000;
  @Input() minValue: number = 1000;
  @Input() maxValue: number = 100000;

  constructor() { }

  public getSpaceNumber(number: number): string {
    return String(number)
      .replace(
        /(?!^)(?=(?:\d{3})+$)/g,
        ' '
      )
  }

  public onAmountPlus(): void {
    if (this.amount < this.maxValue) {
      this.amount += 1000;
    }
  }

  public onAmountMinus(): void {
    if (this.amount > this.minValue) {
      this.amount -= 1000;
    }
  }

  public onSliderChanges(event: any): void {
    const currentSliderValue = Number(event.target.value);

    if (currentSliderValue * 1000 >= this.minValue) {
      this.amount = currentSliderValue * 1000;
    }
  }
}
