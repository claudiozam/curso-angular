import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { FormProductoComponent } from './form-producto/form-producto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListadoProductosComponent, FormProductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-integrador';

  recuperarProducto(producto : any) {
    console.log('Ojo que soy el padre!!');
    console.log(producto.id + ' ' + producto.nombre);
  }
}
