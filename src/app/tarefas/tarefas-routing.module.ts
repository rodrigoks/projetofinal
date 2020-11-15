import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TarefasRoutingComponent } from './tarefas-routing.component';
import { CadastrarTarefaComponent } from './cadastrar/cadastrar-tarefa.component';
import { EditarTarefaComponent } from './editar/editar-tarefa.component';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';

export const TAREFAS_ROUTES: Routes = [
	{
		path: 'tarefas',
		component: TarefasRoutingComponent,
		children: [
			{ 
				path: '', 
				component: ListarTarefaComponent
			}, 
			{ 
				path: 'cadastrar', 
				component: CadastrarTarefaComponent
			},
			{ 
				path: 'editar/:id', 
				component: EditarTarefaComponent
			}
		]
	}
];

@NgModule({
  imports: [
    RouterModule.forChild(TAREFAS_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class TarefasRoutingModule {
}
