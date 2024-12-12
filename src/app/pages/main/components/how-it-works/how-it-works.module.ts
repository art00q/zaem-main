import { NgModule } from "@angular/core";
import { HowItWorksComponent } from "./how-it-works.component";
import { CardModule } from "../../../../commons/components/card/card.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
      HowItWorksComponent,
    ],
    imports: [
        CardModule,
        CommonModule,
    ],
    exports: [
        HowItWorksComponent,
    ]
  })
  export class HowItWorksModule { }