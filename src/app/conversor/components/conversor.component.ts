import { Component, OnInit, ViewChild } from '@angular/core';

import { MoedaService } from '../services/moeda.service';
import { ConversorService } from '../services/conversor.service';

import { ConversaoResponseVO } from '../models/conversado-response-vo.model';
import { ConversaoVO } from '../models/conversao-vo.model';
import { MoedaVO } from '../models/moeda-vo.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css'],
  preserveWhitespaces: true
})
export class ConversorComponent implements OnInit {

  public moedas: MoedaVO[];
  public conversao: ConversaoVO;
  public possuiErro: boolean;
  public conversaoResponse: ConversaoResponseVO;

  @ViewChild("conversaoForm", { static: true }) conversaoForm: NgForm;

  constructor(
    private moedaService: MoedaService,
    private conversorService: ConversorService) {}

  ngOnInit() {
  	this.moedas = this.moedaService.listarTodas();
  	this.init();
  }

  /**
   * Efetua a chamada para a conversão dos valores.
   *
   * @return void
   */
  init(): void {
  	this.conversao = new ConversaoVO('USD', 'BRL', null);
  	this.possuiErro = false;
  }

  /**
   * Efetua a chamada para a conversão dos valores.
   *
   * @return void
   */
  converter(): void {
  	if (this.conversaoForm.form.valid) {
  	  this.conversorService
        .converter(this.conversao)
        .subscribe(
          response => this.conversaoResponse = response,
          error => this.possuiErro = true
        );
  	}
  }

}
