import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor(private http:HttpClient) { 
    this.cargarProductos();
  }

  // Metodos
  private cargarProductos(){
    // usamos la Promise => Esto ejecuta cierto codigo hasta que esto se resuelva o ejecute.
    return new Promise((resolve, reject) => {
      this.http.get('https://angular-html-a046d-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe( (resp:any) => {
        console.log(resp);
        this.productos = resp;
        // Tras pasar unos segundos se dejara de visualizar el reload y se mostraran los productos
        setTimeout(()=>{
          this.cargando = false;
          // resolve(); // Indicamos que la promesa termino exitosamente
        },2000);// Despues de 2 segundos
      });
    });
  }

  getProducto(id:String){
    return this.http.get(`https://angular-html-a046d-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino:string){
    if(this.productos.length === 0){
      // Cargar productos
      this.cargarProductos().then(() => {
        // Ejecutar despues de tener los productos
        // Aplicar el filtro
        this.filtrarProductos(termino);
      });
    }else{
      // Aplicar el filtro
      this.filtrarProductos(termino);
    }
    // Limpiamos la lista y devolvemos una nueva lista correspondiente a lo filtrado
    // this.productosFiltrado = this.productos.filter(producto => {
    //   return true;
    // });
    // console.log(this.productosFiltrado);
  }

  private filtrarProductos(termino:string){
    // Limpiamos el arreglo
    this.productosFiltrado = [];
    // Los valores de la variable 'termino' lo convertimos a minuscula
    termino = termino.toLocaleLowerCase();
    // Llenar el arreglo de 'productosFiltrado' en base al filtro que indica la persona
    this.productos.forEach(prod => {
      // Creamos una variable temporal
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if(prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0){
        this.productosFiltrado.push(prod);
      }
    });
  }
}
