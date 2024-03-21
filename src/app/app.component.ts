import { Component, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { FormProductoComponent } from './form-producto/form-producto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListadoProductosComponent, FormProductoComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-integrador';

  @ViewChild(ListadoProductosComponent) listadoProductos: any;

  constructor(private router : Router) {
  }

  eventoClickCambiarRuta() {
    this.router.navigate(['/listado-productos']);
  }

  recuperarProducto(producto : any) {
    console.log('Ojo que soy el padre!!');
    console.log(producto.id + ' ' + producto.nombre);
  }

  recibirProducto(producto : any) {
    console.log('Ojo que soy el padre!!');
    console.log(producto.id + ' ' + producto.nombre);
    this.listadoProductos.recibirProducto(producto);
  }
}
