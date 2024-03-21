import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormProductoComponent } from '../form-producto/form-producto.component';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { CapitalizePipe } from '../capitalize.pipe';


export interface Producto {
  id: number,
  nombre: string,
  precio: number,
  fechaAlta: Date
}

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [FormProductoComponent, UpperCasePipe, CurrencyPipe, CapitalizePipe, DatePipe],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {

  @Output() updateProducto = new EventEmitter<Producto>(); 

  productoActual!: Producto;

  productos : Array<Producto> = [{
    id: 1,
    nombre: 'Test 1',
    precio: 1000,
    fechaAlta: new Date()
  }, {
    id: 2,
    nombre: 'Test 2',
    precio: 2000,
    fechaAlta: new Date()
  }];


  eventoClickVer(p : Producto) {
    console.log(p.id + ' ' + p.nombre);
    this.productoActual = p;
    this.updateProducto.emit(p);
  }

  recibirProducto(producto : Producto) {
    this.productos.push(producto);
  }

}
