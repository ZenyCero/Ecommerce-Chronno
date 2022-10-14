import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { CatalogoComponent } from './components/pages/catalogo/catalogo.component';
import { ContactoComponent } from './components/pages/contacto/contacto.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HombreComponent } from './components/pages/catalogo/hombre/hombre.component';
import { MujerComponent } from './components/pages/catalogo/mujer/mujer.component';
import { IniciarSesionComponent } from './components/pages/login/iniciar-sesion/iniciar-sesion.component';
import { RegistrarComponent } from './components/pages/login/registrar/registrar.component';
import { PanelAdminComponent } from './components/pages/panel/panel-admin/panel-admin.component';
import { ProductosComponent } from './components/pages/panel/panel-admin/gestion/productos/productos.component';
import { ProveedoresComponent } from './components/pages/panel/panel-admin/gestion/proveedores/proveedores.component';

const routes: Routes = [
    {path:'',component: HomeComponent},
    {path:'home',component: HomeComponent},
    {path:'iniciarSesion',component: IniciarSesionComponent},
    {path:'registrar',component: RegistrarComponent},
    {path:'catalogo',component: CatalogoComponent,
      children: [
        {path:'mujer',component: MujerComponent},
        {path:'hombre',component: HombreComponent},
      ]},
    {path:'about',component: AboutComponent},
    {path:'contacto',component: ContactoComponent},
    {path:'panelAdmin',component: PanelAdminComponent},
    {path:'producto',component: ProductosComponent},
    {path:'proveedor',component: ProveedoresComponent},
    {path:'**',pathMatch: 'full', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
