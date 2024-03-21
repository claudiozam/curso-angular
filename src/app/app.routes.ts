import { Routes } from '@angular/router';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { VerProductoComponent } from './ver-producto/ver-producto.component';
import { RutaNoEncontradaComponent } from './ruta-no-encontrada/ruta-no-encontrada.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', title: "Home", component: HomeComponent },
    { path: 'listado-productos', title: "Listado de productos", component: ListadoProductosComponent  },
    { path: 'ver-producto/:id', title:"Ver producto", component: VerProductoComponent },
    { path: '**', title:"Ruta no encontrada", component: RutaNoEncontradaComponent },
];
