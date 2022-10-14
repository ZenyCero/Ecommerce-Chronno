import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { IniciarSesionService } from '../../../../services/login/iniciar-sesion.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  passYTel:FormGroup = new FormGroup({})

  constructor(private loginFlatService:IniciarSesionService, private formBuilder:FormBuilder) { }
  ngOnDestroy(): void {
    this.loginFlatService.loginFlat = false;
  }

  ngOnInit(): void {
    this.loginFlatService.loginFlat = true;
    this.passYTel = this.formBuilder.group(
      {
        fullName: ['',Validators.compose([Validators.required,Validators.pattern('[a-zA-Z]*')])],
        email: ['',Validators.compose([Validators.required,Validators.email])],
        direccion: [''],
        telefono: ['',Validators.compose([Validators.required,Validators.minLength(9),Validators.maxLength(9)])],
        password: ['']
      }
    )
  }

  Loguear(){
    if(this.passYTel.valid){
      
    }
  }

}
