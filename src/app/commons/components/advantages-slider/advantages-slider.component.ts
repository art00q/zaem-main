import { Component, Input } from '@angular/core';
import { AdvantagesCard } from '../../interfaces/advantages-card.interface';

@Component({
  selector: 'app-advantages-slider',
  templateUrl: './advantages-slider.component.html',
  styleUrls: ['./advantages-slider.component.scss'],
  standalone: false,
})
export class AdvantagesSliderComponent {
  @Input() cards: AdvantagesCard[] = [];
  
  public currentCardIndex: number = 0;

  public onImageVisibilityChange(isVisible: any, index: number): void {
    if (isVisible) {
      this.currentCardIndex = index;
    }
  }
}
