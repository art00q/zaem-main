import { Component, Input } from '@angular/core';
import { CardData } from '../../interfaces/card.interface';

@Component({
  selector: 'app-card',
  standalone: false,
  
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() cardData!: CardData;

  constructor() { }
}
