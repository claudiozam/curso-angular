import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormProductoComponent } from '../form-producto/form-producto.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [FormProductoComponent, NgbAlertModule],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {

  @Output() updateProducto = new EventEmitter<any>(); 

  productoActual : any = null;

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

  recibirProducto(producto : any) {
    this.productos.push(producto);
  }

}
