import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: false,
  
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})
export class BadgeComponent {
  @Input() text!: string

  constructor() {

  }
}
