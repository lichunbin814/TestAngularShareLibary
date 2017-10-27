


import { NgModule } from '@angular/core';
import { LayoutComponent } from "./layout.component";
import { LayoutRoutingModule } from "./layout-routing.module";

@NgModule({
    imports: [
        LayoutRoutingModule
    ],
    exports: [
        LayoutComponent
    ],
    declarations: [
        LayoutComponent
    ],
    providers: [],
})
export class LayoutModule { }



