import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConversorRoutingComponent } from './conversor-routing.component';
import { ConversorComponent } from './components/conversor.component';

export const CONVERSOR_ROUTES: Routes = [
	{
		path: 'conversor-moedas',
		component: ConversorRoutingComponent,
		children: [
		  {
			path: '', 
			component: ConversorComponent 
		  }
		]
	}
];

@NgModule({
  imports: [
    RouterModule.forChild(CONVERSOR_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class ConversorRoutingModule {
}