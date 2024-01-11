import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [	
    AppComponent,
    FooterComponent,
    NavbarComponent
      
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatChipsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
