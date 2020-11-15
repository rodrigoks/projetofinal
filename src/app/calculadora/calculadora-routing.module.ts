import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalculadoraRoutingComponent } from './calculadora-routing.component';
import { CalculadoraComponent } from './calculadora.component';

export const CALCULADORA_ROUTES: Routes = [
	{
		path: 'calculadora',
		component: CalculadoraRoutingComponent,
		children: [
		  {
			path: '', 
			component: CalculadoraComponent 
		  }
		]
	}
];

@NgModule({
  imports: [
    RouterModule.forChild(CALCULADORA_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class CalculadoraRoutingModule {
}
