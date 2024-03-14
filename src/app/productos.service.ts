import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos : Array<any>= [];

  constructor() { }


  guardarProducto(producto : any) {
    this.productos.push(producto);
    localStorage.setItem('productos', JSON.stringify(this.productos));
  }

  recuperarProductos() : Array<any> {
    let productosRecuperados = localStorage.getItem('productos');
    if(productosRecuperados != null) {
      this.productos = JSON.parse(productosRecuperados);
    }
    return this.productos;
  }


}
