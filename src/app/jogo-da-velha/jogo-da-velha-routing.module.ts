import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JogoDaVelhaComponent } from './jogo-da-velha.component';
import { JogoDaVelhaRoutingComponent } from './jogo-da-velha-routing.component';

export const JOGODAVELHAROUTES: Routes = [
	{
		path: 'jogo-da-velha',
		component: JogoDaVelhaRoutingComponent,
		children: [
		  {
			path: '', 
			component: JogoDaVelhaComponent 
		  }
		]
	}
];

@NgModule({
  imports: [
    RouterModule.forChild(JOGODAVELHAROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class JogoDaVelhaRoutingModule {
}
