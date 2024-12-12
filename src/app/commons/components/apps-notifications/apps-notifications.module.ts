import { NgModule } from "@angular/core";
import { AppsNotificationsComponent } from "./apps-notifications.component";
import { AppsModule } from "../apps/apps.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        AppsNotificationsComponent
    ],
    imports: [
        AppsModule,
        CommonModule,
    ],
    exports: [
        AppsNotificationsComponent
    ]
  })
  export class AppsNotificationsModule { }