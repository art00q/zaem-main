import { NgModule } from "@angular/core";
import { BanksComponent } from "../../components/banks/banks.component";
import { MainComponent } from "./main.component";
import { BadgeComponent } from "../../components/badge/badge.component";
import { LoanFormModule } from "./components/loan-form/loan-form.module";
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { HowItWorksModule } from "./components/how-it-works/how-it-works.module";
import { AppCtaComponent } from './components/app-cta/app-cta.component';
import { AppCtaModule } from "./components/app-cta/app-cta.module";
import { BadgeModule } from "../../components/badge/badge.module";
import { AppsModule } from "../../commons/components/apps/apps.module";
import { AdvantagesSliderModule } from "../../commons/components/advantages-slider/advantages-slider.module";

@NgModule({
    declarations: [
        MainComponent,
        BanksComponent,
    ],
    imports: [
        LoanFormModule,
        HowItWorksModule,
        AppCtaModule,
        BadgeModule,
        AdvantagesSliderModule,
    ],
    exports: [
        MainComponent,
    ]
})
export class MainModule { }