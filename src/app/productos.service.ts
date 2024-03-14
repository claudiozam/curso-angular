import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  urlBase = 'http://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) {

  }

  getProductos(){
    return this.httpClient.get<Array<any>>(this.urlBase + '/posts');
  }

  getProducto(id: Number){
    return this.httpClient.get<any>(this.urlBase + '/posts/' + id);
  }
}
