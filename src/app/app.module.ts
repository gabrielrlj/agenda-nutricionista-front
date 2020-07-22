import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacientesService } from './pacientes.service';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { PacientesModule } from './pacientes/pacientes.module';
import { HttpClientModule } from '@angular/common/http';
import { ConsultasModule } from './consultas/consultas.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    PacientesModule,
    ConsultasModule
  ],
  providers: [PacientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
