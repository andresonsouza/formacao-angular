import { Component, DoCheck, OnInit } from '@angular/core';

import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'app-lista-de-compras';
  listaCompra!: Array<Item>
  itemParaSerEditado!: Item;

  constructor(
    private listaDeCompraService: ListaDeCompraService
  ) { }

  ngOnInit(): void {
    this.listaCompra = this.listaDeCompraService.getListaDeCompra();

  }

  editarItem(item: Item) {
    this.itemParaSerEditado = item;
  }

  deletarItem(id: number) {
    const index = this.listaCompra.findIndex(item => item.id == id);
    this.listaCompra.splice(index, 1);
  }

  ngDoCheck() {
    this.listaDeCompraService.atualizarLocalStorage();
  }

}
