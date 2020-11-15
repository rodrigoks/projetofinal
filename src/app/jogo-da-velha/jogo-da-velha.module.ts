import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JogoDaVelhaRoutingModule } from './jogo-da-velha-routing.module';

import { JogoDaVelhaComponent } from './jogo-da-velha.component';
import { JogoDaVelhaRoutingComponent } from './jogo-da-velha-routing.component';

@NgModule({
  imports: [
    CommonModule,
    JogoDaVelhaRoutingModule
  ],
  declarations: [
    JogoDaVelhaComponent,
    JogoDaVelhaRoutingComponent
  ],
  exports: [
    JogoDaVelhaComponent,
    JogoDaVelhaRoutingComponent
  ]
})
export class JogoDaVelhaModule { }
