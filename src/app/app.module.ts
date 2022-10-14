import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CatalogoComponent } from './components/pages/catalogo/catalogo.component';
import { HombreComponent } from './components/pages/catalogo/hombre/hombre.component';
import { MujerComponent } from './components/pages/catalogo/mujer/mujer.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactoComponent } from './components/pages/contacto/contacto.component';
import { IniciarSesionComponent } from './components/pages/login/iniciar-sesion/iniciar-sesion.component';
import { RegistrarComponent } from './components/pages/login/registrar/registrar.component';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelAdminComponent } from './components/pages/panel/panel-admin/panel-admin.component';
import { PanelUserComponent } from './components/pages/panel/panel-user/panel-user.component';
import { ProveedoresComponent } from './components/pages/panel/panel-admin/gestion/proveedores/proveedores.component';
import { ProductosComponent } from './components/pages/panel/panel-admin/gestion/productos/productos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CatalogoComponent,
    HombreComponent,
    MujerComponent,
    AboutComponent,
    ContactoComponent,
    IniciarSesionComponent,
    RegistrarComponent,
    PanelAdminComponent,
    PanelUserComponent,
    ProveedoresComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
