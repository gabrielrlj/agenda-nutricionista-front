import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultasRoutingModule } from './consultas-routing.module';
import { ConsultasListaComponent } from './consultas-lista/consultas-lista.component';


@NgModule({
  declarations: [ConsultasListaComponent],
  imports: [
    CommonModule,
    ConsultasRoutingModule
  ],
  exports : [
    ConsultasListaComponent
  ]
})
export class ConsultasModule { }
