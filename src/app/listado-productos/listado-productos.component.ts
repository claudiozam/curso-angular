import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormProductoComponent } from '../form-producto/form-producto.component';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [],
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
    this.productos = this.productosService.recuperarProductos();
  }

  eventoClickVer(p : any) {
    console.log(p.id + ' ' + p.nombre);
    this.productoActual = p;
    this.updateProducto.emit(p);
  }

  recibirProducto(producto : any) {
    //this.productos.push(producto);
  }

}
