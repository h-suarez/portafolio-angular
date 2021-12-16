import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo : any[] = [];

  // Para usar el HttpClientModule aqui, debemos inyectar un servicio tambien.
  // pero ese servicio ya viene en ese modulo que acabo de inyectar
  constructor( private http: HttpClient ) { 
    console.log('Servicio de infoPagina listo')
    // Invocamos los metodos
    this.cargarInfo();
    this.cargarEquipo();
  }
  // Creamos metodos
  private cargarInfo(){
    // Leer el archivo JSON
    // Necesito un modulo para realizar peticiones HTTP
    // Esto es la definición de donde esta la información => this.http.get('assets/data/data-pagina.json')
    // El subscribe recibe una respuesta=> subscribe( resp => {})
    this.http.get('assets/data/data-pagina.json').subscribe( (resp:InfoPagina) => {
      this.cargada = true;
      this.info = resp;
    });
  }
  private cargarEquipo(){
    this.http.get('https://angular-html-a046d-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( (resp:any) => {
      this.cargada = true;
      this.equipo = resp;
      // console.log(resp);
    });
  }
}
