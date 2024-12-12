import { Component, Input } from '@angular/core';
import { InputData } from '../../interfaces/input.interface';

@Component({
  selector: 'app-input',
  standalone: false,
  
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() data: InputData = {
    type: 'text',
    name: 'input',
    placeholder: '',
    required: false,
  }

  constructor() { }
}
