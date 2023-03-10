import { Component, OnInit } from '@angular/core';
import { Pensamneto } from '../pensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listarPensamentos: Pensamneto[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
