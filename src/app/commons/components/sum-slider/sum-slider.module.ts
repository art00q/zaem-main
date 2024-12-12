import { NgModule } from "@angular/core";
import { SumSliderComponent } from "./sum-slider.component";
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
    declarations: [
        SumSliderComponent,
    ],
    imports: [
        MatSliderModule,
    ],
    exports: [
        SumSliderComponent,
    ]
})
export class SumSliderModule { }