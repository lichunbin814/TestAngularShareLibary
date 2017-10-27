



import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from "./item/item.component";
import { LayoutRoute } from "../../../shared-layout/src/shared/layout";

const routes: LayoutRoute[] = [
  { path: 'item', component: ItemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }