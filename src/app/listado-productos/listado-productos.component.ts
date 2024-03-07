import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {

  @Output() updateProducto = new EventEmitter<any>(); 

  productoActual = {
    id: 0,
    nombre: '',
    precio: 0
  };

  productos = [{
    id: 1,
    nombre: 'Test 1',
    precio: 1000
  }, {
    id: 2,
    nombre: 'Test 2',
    precio: 2000
  }];


  eventoClickVer(p : any) {
    console.log(p.id + ' ' + p.nombre);
    this.productoActual = p;
    this.updateProducto.emit(p);
  }

}
