import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConsultasRoutingModule } from './consultas-routing.module';
import { ConsultasListaComponent } from './consultas-lista/consultas-lista.component';
import { ConsultasFormComponent } from './consultas-form/consultas-form.component';


@NgModule({
  declarations: [ConsultasListaComponent, ConsultasFormComponent],
  imports: [
    CommonModule,
    ConsultasRoutingModule,
    FormsModule
  ],
  exports : [
    ConsultasListaComponent,
    ConsultasFormComponent
  ]
})
export class ConsultasModule { }
