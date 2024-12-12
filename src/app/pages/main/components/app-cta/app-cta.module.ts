import { NgModule } from "@angular/core";
import { AppCtaComponent } from "./app-cta.component";
import { BadgeModule } from "../../../../components/badge/badge.module";
import { AppsModule } from "../../../../commons/components/apps/apps.module";

@NgModule({
    declarations: [
        AppCtaComponent
    ],
    imports: [
        BadgeModule,
        AppsModule,
    ],
    exports: [
        AppCtaComponent
    ]
})
export class AppCtaModule { }