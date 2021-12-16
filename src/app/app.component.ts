import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Este constructor va hacer una inyección de una dependencia,
  // esa inyección o mejor dicho los servicios se permiten o se pueden inyectar
  // en el decorador @Injectable.
  constructor(public _infoPagina:InfoPaginaService,
              public _productosService:ProductosService){}
}
