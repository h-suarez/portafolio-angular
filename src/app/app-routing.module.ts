// Este es el modulo encargado de la creación de las rutas de las paginas
// para que las paginas se conecten con otras paginas.
// Nota:
// - Todo en angular es una clase común y corriente
// - Vamos a exportar esta clase porque vamos a utilizarla fuera de aca.
// - Necesito que esta clase sea un modulo, asi que le ponemos una anotación (decorador)

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // Con el RouterModule le decimos a angular si estas son las rutas principales o rutas hijas
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';

// Especificamos las rutas de mi aplicación
// Creamos constantes de tipo Routes, y esto va ha hacer igual a un arreglo
const app_routes:Routes = [
    // Dentro de este arreglo viene la definición de cada una de las rutas
    // que mi aplicación va a manejar.
    // El orden que pongamos aqui si importa, pero no tanto cuando son palabras, es decir
    // si no encuentra ninguna ruta, por lo general que es el path, que agarra todas las
    // demas opciones, por decir el 'else' de las rutas, va al final
    //{ path:'/', component:PortafolioComponent}, // Cuando mi ruta sea vacia, osea asi => http://localhost:4200, va a redirigir al componente PortafolioComponent
    { path:'home', component:PortafolioComponent},
    { path:'about', component:AboutComponent},
    { path:'item/:id', component:ItemComponent},
    { path:'search/:termino', component:SearchComponent},
    // pathMatch: 'full' => Lee todo el path, y nos redirecciona al PortafolioComponent
    { path:'**', pathMatch: 'full', redirectTo:'home'}, // Definimos otra ruta que sea la exepción, en caso las otras rutas no navegan a ninguna parte, lo redireccionamos a cualquiera de esos paths disponibles
];

@NgModule({
    // Aqui adentro viene la configuración
    imports: [ // imports es un arreglo de diferentes modulos
        // {useHash: true} => Es para añadirle un # a las rutas, esto va hacer que no importe
        // en que pagina usted se encuentre siempre va a tener un Hash, es decir los navegadores
        // web van ha saber que lo que viene despues del # realmente no es un directorio en mi
        // sitio web, es una parte de la ruta del index.html que se encuentra en esa dirección
        RouterModule.forRoot(app_routes, {useHash: true})
    ],
    exports: [ // Tenemos que exportar algo para que pueda ser utilizado fuera de este componente
        RouterModule
    ]
})
export class AppRoutingModule {}