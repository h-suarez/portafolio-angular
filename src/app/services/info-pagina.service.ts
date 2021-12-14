import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  // Para usar el HttpClientModule aqui, debemos inyectar un servicio tambien.
  // pero ese servicio ya viene en ese modulo que acabo de inyectar
  constructor( private http: HttpClient ) { 
    console.log('Servicio de infoPagina listo')
    // Leer el archivo JSON
    // Necesito un modulo para realizar peticiones HTTP
    // Esto es la definición de donde esta la información => this.http.get('assets/data/data-pagina.json')
    // El subscribe recibe una respuesta=> subscribe( resp => {})
    this.http.get('assets/data/data-pagina.json').subscribe( (resp:InfoPagina) => {
      this.cargada = true;
      this.info = resp;
      console.log(resp);
    });
  }
}
