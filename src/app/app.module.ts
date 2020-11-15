import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CalculadoraModule } from './calculadora/calculadora.module';
import { ConversorModule } from './conversor/conversor.module';
import { TarefasModule } from './tarefas/tarefas.module';
import { JogoDaVelhaModule } from './jogo-da-velha/jogo-da-velha.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    CalculadoraModule,
    ConversorModule,
    TarefasModule,
    JogoDaVelhaModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
