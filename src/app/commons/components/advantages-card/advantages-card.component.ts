import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AdvantagesCard } from '../../interfaces/advantages-card.interface';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-advantages-card',
  standalone: false,
  
  templateUrl: './advantages-card.component.html',
  styleUrl: './advantages-card.component.scss'
})
export class AdvantagesCardComponent implements OnChanges {
  @Input() cardData!: AdvantagesCard;

  public text!: SafeHtml;

  constructor(
    private readonly sanitizer: DomSanitizer,
  ) { }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['cardData'] && this.cardData?.text) {
      this.text = this.sanitizer.bypassSecurityTrustHtml(this.cardData.text);
    }
  }
}
