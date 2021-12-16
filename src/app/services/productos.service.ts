import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor(private http:HttpClient) { 
    this.cargarProductos();
  }

  // Metodos
  private cargarProductos(){
    this.http.get('https://angular-html-a046d-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe( (resp:any) => {
      console.log(resp);
      this.productos = resp;

      // Tras pasar unos segundos se dejara de visualizar el reload y se mostraran los productos
      setTimeout(()=>{
        this.cargando = false;
      },2000);// Despues de 2 segundos
    });
  }
}
