import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/catalogo/productos.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  constructor(public _productoService:ProductosService) { }

  ngOnInit(): void {
  }

}
