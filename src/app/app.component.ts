import { Component } from '@angular/core';
import { IniciarSesionService } from './services/login/iniciar-sesion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public loginFlatService:IniciarSesionService){
    
  }
}
