import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../../services/header/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public _infoPagina:InfoPaginaService) { }

  ngOnInit(): void {
  }

}
