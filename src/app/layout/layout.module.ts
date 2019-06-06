import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRouteModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { ContentComponent } from './content/content.component';
import { TabComponent } from './tab/tab.component';

import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [LayoutComponent, ContentComponent, TabComponent],
  imports: [
    CommonModule,
    LayoutRouteModule,NgZorroAntdModule
  ],
  exports:[LayoutComponent]
})
export class LayoutModule {}
