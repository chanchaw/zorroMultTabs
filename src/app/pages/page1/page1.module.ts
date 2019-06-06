import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page1RoutingModule } from './page1-routing.module';
import { Page1Component } from './page1.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [Page1Component, ContentComponent],
  imports: [
    CommonModule,
    Page1RoutingModule
  ],
  exports:[ContentComponent,Page1Component]
})
export class Page1Module { }
