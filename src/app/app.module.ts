import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// MODULO PARA EL SERVICIO
import { HttpClientModule } from '@angular/common/http'

// COMPONENTES
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
// RUTAS
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [ // En las declaraciones se veen los compenentes
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent
  ],
  imports: [ // En los imports se veen los modulos
    BrowserModule,
    AppRoutingModule,
    // Este HttpClientModule nos va a permitir poder realizar peticiones
    // get,put,delete,post,etc a servidores REST
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
