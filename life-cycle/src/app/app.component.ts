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
    console.log(this.listaCompra);

  }

  editarItem(item: Item) {
    this.itemParaSerEditado = item;
  }

  ngDoCheck() {
    console.log('doCheck foi chamado');

    this.listaDeCompraService.atualizarLocalStorage();
  }

}
