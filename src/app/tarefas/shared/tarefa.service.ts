import { Injectable } from '@angular/core';
import { TarefaVO } from './tarefa-vo.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listarTodos(): TarefaVO[] {
  	const tarefas = localStorage['tarefas'];
  	return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrar(tarefa: TarefaVO): void {
  	const tarefas = this.listarTodos();
  	tarefa.id = new Date().getTime();
  	tarefas.push(tarefa);
  	localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  buscarPorId(id: number): TarefaVO {
    const tarefas: TarefaVO[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  atualizar(tarefa: TarefaVO): void {
    const tarefas: TarefaVO[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => { 
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  remover(id: number): void {
    let tarefas: TarefaVO[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarStatus(id: number): void {
    const tarefas: TarefaVO[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => { 
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

}
