import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { RedesComponent } from './components/redes/redes.component';
import { BannerComponent } from './components/banner/banner.component';
import { NombreComponent } from './components/nombre/nombre.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { FotoComponent } from './components/foto/foto.component';
import { BarraSupComponent } from './components/barra-sup/barra-sup.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HysComponent } from './components/hys/hys.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    RedesComponent,
    BannerComponent,
    NombreComponent,
    AcercaDeComponent,
    FotoComponent,
    BarraSupComponent,
    ExperienciaComponent,
    EducacionComponent,
    HysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({}) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
