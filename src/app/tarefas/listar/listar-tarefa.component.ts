import { Component, OnInit } from '@angular/core';

import { TarefaService } from '../shared/tarefa.service';

import { TarefaVO } from '../shared/tarefa-vo.model';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css'],
  preserveWhitespaces: true
})
export class ListarTarefaComponent implements OnInit {

  tarefas: TarefaVO[];

  constructor(
    private _tarefaService: TarefaService
  ) {}

  ngOnInit() {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): TarefaVO[] {
  	return this._tarefaService.listarTodos();
  }

  remover($event: any, tarefa: TarefaVO): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')) {
      this._tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

  alterarStatus(tarefa: TarefaVO): void {
    if (confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '"?')) {
      this._tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

}
