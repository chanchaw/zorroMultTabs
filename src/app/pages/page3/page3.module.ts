import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page3RoutingModule } from './page3-routing.module';
import { Page3Component } from './page3.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [Page3Component, ContentComponent],
  imports: [
    CommonModule,
    Page3RoutingModule
  ],
  exports:[Page3Component,ContentComponent]
})
export class Page3Module { }
