import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // Creamos una variable en la que guardamos el año actual
  // Esta variable la mandamos a llamar en el documento footer.component.html
  anio: number = new Date().getFullYear();

  constructor(public _servicio: InfoPaginaService) { }

  ngOnInit(): void {
  }

}
