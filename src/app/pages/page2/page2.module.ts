import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page2RoutingModule } from './page2-routing.module';
import { Page2Component } from './page2.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [Page2Component, ContentComponent],
  imports: [
    CommonModule,
    Page2RoutingModule
  ],
  exports:[Page2Component,ContentComponent]
})
export class Page2Module { }
