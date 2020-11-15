import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculadoraRoutingModule } from './calculadora-routing.module';

import { CalculadoraComponent } from './calculadora.component';
import { CalculadoraRoutingComponent } from './calculadora-routing.component';

@NgModule({
  declarations: [
    CalculadoraComponent,
    CalculadoraRoutingComponent
  ],
  exports: [
    CalculadoraComponent,
    CalculadoraRoutingComponent
  ],
  imports: [
    CommonModule,
    CalculadoraRoutingModule
  ]
})
export class CalculadoraModule { }
