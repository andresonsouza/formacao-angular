import { Component, OnInit } from '@angular/core';
import { Pensamneto } from '../pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamneto = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1',
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento() {
    alert('Pensamento criado com sucesso!');
  }

  cancelar() {
    // alert('Pensamento cancelado !');
  }

}
