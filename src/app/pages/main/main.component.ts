import { Component } from '@angular/core';
import { AdvantagesCard } from '../../commons/interfaces/advantages-card.interface';
import { ADVANTAGES_CARDS } from './commons/const/advantages-card.const';

@Component({
  selector: 'app-main',
  standalone: false,
  
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  public advantagesCards: AdvantagesCard[] = ADVANTAGES_CARDS;

  constructor() { }
}
