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

  productos = [{
    id: 1,
    nombre: 'Test 1',
    precio: 1000
  }, {
    id: 2,
    nombre: 'Test 2',
    precio: 2000
  }];

  productos2 = new Array<any>();

  constructor(private productosService : ProductosService) {

  }
  
  ngOnInit(): void {
    this.productosService.getProductos().subscribe(response => {
      this.productos2 = response;
    });
  }

  eventoClickVer(p : any) {
    console.log(p.id + ' ' + p.nombre);
    this.productoActual = p;
    this.updateProducto.emit(p);

    this.productosService.getProducto(p.id).subscribe(response => {
      console.log(response);
    });

  }

  recibirProducto(producto : any) {
    this.productos.push(producto);
  }

}
