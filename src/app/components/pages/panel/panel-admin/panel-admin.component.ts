import { Component, OnInit,OnDestroy, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Chart from 'chart.js/auto';
import { IniciarSesionService } from '../../../../services/login/iniciar-sesion.service';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css']
})
export class PanelAdminComponent implements OnInit,OnDestroy {

  totalSale: any = 0;
  totalOrder: any = 0;
  totalStock: any = 0;
  lastOrder:String[] = [];
  Orden: String[] = []

  constructor(private loginFlatService:IniciarSesionService,public http:HttpClient) { }

  ngOnDestroy(): void {
    this.loginFlatService.loginFlat = false;
  }

  ngOnInit(): void {
    this.loginFlatService.loginFlat = true;
    this.cargarTotalSale();
    this.cargarTotalOrder();
    this.cargarTotalStock();
    this.cargarLastOrder();
  }

  cargarTotalSale(){
    this.http.get('http://localhost:8080/api/detalle_ordenes/totalSale')
    .subscribe(resp =>{
      this.totalSale = resp;
    })
  }

  cargarTotalOrder(){
    this.http.get('http://localhost:8080/api/detalle_ordenes/totalOrder')
    .subscribe(resp =>{
      this.totalOrder = resp;
    })
  }

  cargarTotalStock(){
    this.http.get('http://localhost:8080/api/productos/totalStock')
    .subscribe(resp =>{
      this.totalStock = resp;
    })
  }

  cargarLastOrder(){
    this.http.get('http://localhost:8080/api/ordenes/lastOrder')
    .subscribe((resp:any) =>{
      this.lastOrder = resp;
      this.lastOrder = this.lastOrder.reverse();
      this.formatearTexto(this.lastOrder);
    })
  }

  formatearTexto(array: Array<String>){
    for(let x = 0;x<array.length;x++){
      for(let y = 0;y<array[x].length;y++){
        console.log(`${x} ${y}`)
        if(y!= 4){
          this.Orden.push(this.lastOrder[x][y])
        }else{
          this.Orden.push(this.lastOrder[x][y]+"\n")
        }
      }
    }
  }

  canvas: any;
  ctx: any;
  @ViewChild('barChart') barChart:any;

  ngAfterViewInit() {
    this.canvas = this.barChart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'bar',
      data: {
        datasets: [{
          label: 'Ventas del año por Mes',
          data: [400,800,1200,400,800,1200,400,800,1200,400,800,1200],
          borderColor: ['rgba(46,105,234)',],
          backgroundColor: ['rgba(46,105,234,0.2)',],
            borderWidth: 4
      }],
        labels: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']
      },
  });
  }

}
