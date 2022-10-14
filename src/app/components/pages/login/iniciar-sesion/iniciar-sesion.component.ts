import { Component, OnInit, OnDestroy } from '@angular/core';
import { IniciarSesionService } from '../../../../services/login/iniciar-sesion.service';
import { Validators,FormControl} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit, OnDestroy {

  constructor(private loginFlatService:IniciarSesionService, private router:Router) { }

  ngOnDestroy(): void {
    this.loginFlatService.loginFlat = false;
  }

  ngOnInit(): void {
    this.loginFlatService.loginFlat = true;
  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  Registar(){
    this.loginFlatService.loginFlat = false;
    this.router.navigate(['registrar']);
    
  }

  Loguear(){
    if(this.emailFormControl.valid){
      //this.logueoService.Login();
    }
  }

}
