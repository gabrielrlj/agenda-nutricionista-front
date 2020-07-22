import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultasListaComponent } from './consultas-lista/consultas-lista.component';
import { ConsultasFormComponent } from './consultas-form/consultas-form.component';


const routes: Routes = [
  {path : 'consultas-lista', component : ConsultasListaComponent},
  {path : 'consultas-form', component : ConsultasFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultasRoutingModule { }
