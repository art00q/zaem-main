import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsNotificationsComponent } from './apps-notifications.component';

describe('AppsNotificationsComponent', () => {
  let component: AppsNotificationsComponent;
  let fixture: ComponentFixture<AppsNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppsNotificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppsNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
