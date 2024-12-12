import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdvantagesCardModule } from "../advantages-card/advantages-card.module";
import { AdvantagesSliderComponent } from "./advantages-slider.component";
import { SpyScrollDirective } from "../../directives/spy-scroll.directive";

@NgModule({
    declarations: [
        AdvantagesSliderComponent,
    ],
    imports: [
        CommonModule,
        AdvantagesCardModule,
        SpyScrollDirective,
    ],
    exports: [
        AdvantagesSliderComponent
    ]
  })
  export class AdvantagesSliderModule { }