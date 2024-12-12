import { NgModule } from "@angular/core";
import { AdvantagesCardComponent } from "./advantages-card.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        AdvantagesCardComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AdvantagesCardComponent
    ]
  })
  export class AdvantagesCardModule { }