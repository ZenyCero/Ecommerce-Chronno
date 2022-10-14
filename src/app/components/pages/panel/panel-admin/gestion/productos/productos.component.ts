import { Component, OnInit, OnDestroy } from '@angular/core';
import { IniciarSesionService } from '../../../../../../services/login/iniciar-sesion.service';
import { HttpClient } from '@angular/common/http';
import { ProductosService } from '../../../../../../services/panel-admin/productos/productos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit, OnDestroy {

  postFormularioProducto: FormGroup = new FormGroup({})

  constructor(private loginFlatService:IniciarSesionService,public http:HttpClient, public _productoService:ProductosService,private formBuilder: FormBuilder) { }

  ngOnDestroy(): void {
    this.loginFlatService.loginFlat = false;
  }

  ngOnInit(): void {
    this.loginFlatService.loginFlat = true;
    this.postFormularioProducto = this.formBuilder.group({
      nombre: ['',Validators.required],
      sku: ['',Validators.required],
      precio: ['',Validators.compose([Validators.required, Validators.min(18),Validators.max(99)])],
      descripcion: ['',Validators.compose([Validators.maxLength(200),Validators.required])],
      stock: ['',Validators.compose([Validators.max(99),Validators.required])],
      acepta: [false, Validators.requiredTrue]
    })
  }

  get nombre(){
    return this.postFormularioProducto.get('nombre')
  } 

  get precio(){
    return this.postFormularioProducto.get('precio')
  } 

  get sku(){
    return this.postFormularioProducto.get('sku')
  } 

  get descripcion(){
    return this.postFormularioProducto.get('descripcion')
  } 

  get stock(){
    return this.postFormularioProducto.get('stock')
  }

  get acepta(){
    return this.postFormularioProducto.get('acepta')
  } 


  enviarProducto(){
    if(this.postFormularioProducto.valid){
      console.table(this.postFormularioProducto.value)
    }
    this.postFormularioProducto.reset();
  }

}
