import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TarefasRoutingModule } from './tarefas-routing.module';
import { TarefaConcluidaDirective } from './shared/tarefa-concluida.directive';

import { ListarTarefaComponent } from './listar/listar-tarefa.component';
import { CadastrarTarefaComponent } from './cadastrar/cadastrar-tarefa.component';
import { EditarTarefaComponent } from './editar/editar-tarefa.component';
import { TarefasRoutingComponent } from './tarefas-routing.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TarefasRoutingModule
  ],
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent,
    TarefaConcluidaDirective,
    TarefasRoutingComponent
  ],
  exports: [
    TarefasRoutingComponent
  ]
})
export class TarefasModule { }
