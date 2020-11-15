import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DasboardRoutingComponent } from './dashboard-routing.component';

import { DashboardComponent } from './dashboard.component';

export const DASHBOARDROUTES: Routes = [
	{
		path: 'dashboard',
		component: DasboardRoutingComponent,
		children: [
		  {
			path: '', 
			component: DashboardComponent 
		  }
		]
	}
];

@NgModule({
  imports: [
    RouterModule.forChild(DASHBOARDROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {
}
