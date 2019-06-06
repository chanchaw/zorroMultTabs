import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from '../page1/page1.component';
import { Page3Component } from './page3.component';

const routes: Routes = [
  {
    path:'',component:Page3Component
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page3RoutingModule { }
