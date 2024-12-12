import { Component, Input } from '@angular/core';
import { CardData } from '../../../../commons/interfaces/card.interface';
import { CARDS_INFO } from '../../commons/const/cards-info.const';

@Component({
  selector: 'app-how-it-works',
  standalone: false,
  
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss'
})
export class HowItWorksComponent {
  @Input() title!: string;

  public cards: CardData[] = CARDS_INFO;

  constructor() {
  }
}
