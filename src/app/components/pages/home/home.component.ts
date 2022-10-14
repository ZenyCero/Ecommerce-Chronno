import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../../services/header/info-pagina.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public _infoPagina:InfoPaginaService) { }

  ngOnInit(): void {
  }

}
