import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';

import { ListaDeCompraService } from '../../service/lista-de-compra.service';
import { Item } from '../../interfaces/iItem';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {
  @Input() itemQueVaiSerEditado!: Item;
  editando = false;
  textoBtn = 'Salvar Item';
  valorItem!: string;

  constructor(
    private listaDeCompraService: ListaDeCompraService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['itemQueVaiSerEditado'].firstChange) {
      this.editando = true;
      this.textoBtn = 'Editar item';
      this.valorItem = this.itemQueVaiSerEditado?.nome;
    }
  }

  ngOnInit(): void { }

  adicionarItem() {
    this.listaDeCompraService.adicionarItemLista(this.valorItem);
    this.limparCampo();
  }

  editarItem() {
    this.listaDeCompraService.editarItemDaLista(this.itemQueVaiSerEditado, this.valorItem);
    this.limparCampo();
    this.editando = false;
    this.textoBtn = 'Salvar item';
  }

  limparCampo() {
    this.valorItem = '';
  }

}
