import { Component } from '@angular/core';

@Component({
  selector: 'app-apps-notifications',
  standalone: false,
  
  templateUrl: './apps-notifications.component.html',
  styleUrl: './apps-notifications.component.scss'
})
export class AppsNotificationsComponent {
  public isClosed: boolean = false;

  constructor() { }

  public onClose(): void {
    this.isClosed = true;
  }
}
