import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipo } from 'src/app/interfaces/about/equipo.interfaces';
import { InfoPagina } from 'src/app/interfaces/header/info-pagina.interfaces';
import { Portada } from 'src/app/interfaces/home/portada.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:InfoPagina = {};
  portada:any = [];
  equipo:any = [];
  cargando:Boolean = true;
  

  constructor(private http:HttpClient) {
      this.cargarInfoPagina();
      this.cargarEquipo();
      this.cargarPortada();
   }

  //Cargar Informacion Basica de la Pagina desde un archivo Local
  private cargarInfoPagina(){
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp:InfoPagina)=>{
      this.info = resp;
    })
  }

  private cargarPortada(){
    this.http.get('https://irms-24143-default-rtdb.firebaseio.com/Portada.json')
      .subscribe((resp:Portada) =>{
        this.portada = resp;
        this.cargando = false;
      })
  }

  private cargarEquipo(){
    this.http.get('https://proyecto-urku-default-rtdb.firebaseio.com/equipo.json')
    .subscribe((resp:Equipo) => {
      this.equipo = resp;
    });
  }
}
