import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path:'page1',
    loadChildren:'./pages/page1/page1.module#Page1Module',
    data:{ title:'页面01',isRemove: true }
  },

  { 
    path:'page2',
    loadChildren:'./pages/page2/page2.module#Page2Module',
    data:{ title:'页面02',isRemove: true }
  },

  { 
    path:'page3',
    loadChildren:'./pages/page3/page3.module#Page3Module',
    data:{ title:'页面03',isRemove: true }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
