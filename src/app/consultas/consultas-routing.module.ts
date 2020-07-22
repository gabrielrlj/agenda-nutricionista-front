import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultasListaComponent } from './consultas-lista/consultas-lista.component';


const routes: Routes = [
  {path : 'consultas-lista', component : ConsultasListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultasRoutingModule { }
