import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../../services/header/info-pagina.service';
import { IniciarSesionService } from '../../../services/login/iniciar-sesion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _infoPagina:InfoPaginaService, private loginFlatService:IniciarSesionService, private router:Router) { }

  ngOnInit(): void {
  }

  IniciarSession(){
    this.router.navigate(['iniciarSesion']);
    this.loginFlatService.loginFlat = true;
  }

}
