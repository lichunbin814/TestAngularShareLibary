import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { LayoutRoute } from "./layout";
import { AppComponent } from "../app/app.component";

const routes: LayoutRoute[] = [
    {
        path: 'activity',
        data :{
            someProperty : {
                someValue : 123
            }
        },
        children: [
            {
                path: ':id',
                component: AppComponent,
                data: {
                    someProperty : {
                        someValue : 123
                    }
                }
            }           
        ]
    }    
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
})
export class LayoutRoutingModule { }



