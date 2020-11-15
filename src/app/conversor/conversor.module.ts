import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ConversorRoutingModule } from './conversor-routing.module';
import { NumeroDirective } from './directives/numero.directive';
import { DataBrPipe } from './pipes/data-br.pipe';

import { ConversorComponent } from './components/conversor.component';
import { ModalCotacaoComponent } from './utils/modal-cotacao.component';
import { ConversorRoutingComponent } from './conversor-routing.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ConversorRoutingModule
  ],
  declarations: [
    ConversorComponent,
    ConversorRoutingComponent,
    NumeroDirective,
    ModalCotacaoComponent,
    DataBrPipe
  ],
  exports: [
    ConversorComponent,
    ConversorRoutingComponent
  ]
})
export class ConversorModule { }
