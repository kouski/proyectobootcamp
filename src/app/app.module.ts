import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculadoraImcComponent } from './calculadora-imc/calculadora-imc.component';
import { CarruselExperienciasComponent } from './carrusel-experiencias/carrusel-experiencias.component';
import { ReproductorComponent } from './reproductor/reproductor.component';
import { RecetasComponent } from './recetas/recetas.component';
import { HttpClientModule } from "@angular/common/http";
import { ListaComponent } from './lista/lista.component';



@NgModule({
  declarations: [	
    AppComponent,
    FooterComponent,
    NavbarComponent,
    FormularioComponent,
    CalculadoraImcComponent,
    CarruselExperienciasComponent,
    ReproductorComponent,
    ListaComponent,
    RecetasComponent,
      
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
