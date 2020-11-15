import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dasboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DasboardRoutingComponent } from './dashboard-routing.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    DasboardRoutingComponent
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
