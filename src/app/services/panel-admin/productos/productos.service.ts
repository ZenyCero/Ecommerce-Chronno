import { Injectable } from '@angular/core';
import { Productos } from '../../../interfaces/panel-admin/productos/productos.interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  Productos: any = []

  constructor(private http:HttpClient) { 
    this.cargarProductos();
  }

  cargarProductos(){
    this.http.get('http://localhost:8080/api/productos')
    .subscribe((resp:Productos)=>{
      this.Productos= resp;
    })
  }
}
