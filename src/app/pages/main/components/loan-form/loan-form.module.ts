import { NgModule } from "@angular/core";
import { LoanFormComponent } from "./loan-form.component";
import { InputModule } from "../../../../commons/components/input/input.module";
import { SumSliderModule } from "../../../../commons/components/sum-slider/sum-slider.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        LoanFormComponent
    ],
    imports: [
        InputModule,
        SumSliderModule,
        CommonModule,
    ],
    exports: [
        LoanFormComponent
    ]
})
export class LoanFormModule { }