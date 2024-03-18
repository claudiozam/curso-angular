import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormProductoComponent } from '../form-producto/form-producto.component';
import { ProductosService } from '../productos.service';
import { cloneDeep, sortBy } from 'lodash';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent implements OnInit {

  @Output() updateProducto = new EventEmitter<any>(); 

  productoActual : any = null;

  productos : Array<any> = [];

  constructor(private productosService : ProductosService) {

  }

  ngOnInit(): void {
    let copiaDeLosProductos = cloneDeep(this.productosService.recuperarProductos());
    let productosOrdenados = sortBy(copiaDeLosProductos, ['nombre']);
    this.productos = productosOrdenados;
  }

  eventoClickVer(p : any) {
    console.log(p.id + ' ' + p.nombre);
    this.productoActual = p;
    this.updateProducto.emit(p);
  }

  recibirProducto(producto : any) {
    this.productos.push(producto);
    this.productos = sortBy(this.productos, ['nombre']);
  }

}
