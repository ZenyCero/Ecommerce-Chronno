import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  producto: any = [];
  catalogo: any = [];
  cargando:boolean = true;

  constructor(private http:HttpClient) { 
    this.cargarProducto();
    this.cargarProducto_idx();
  }

  private cargarProducto_idx(){
    this.http.get('https://proyecto-urku-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe(resp =>{
      this.catalogo = resp;
      setTimeout(() => {
        this.cargando = false;
      }, 1000);
    })
  }

  private cargarProducto(){
    this.http.get('https://proyecto-urku-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe(resp =>{
      this.producto = resp;
      setTimeout(() => {
        this.cargando = false;
      }, 1000);
    })
  }
}
