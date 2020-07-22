import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacientesFormComponent } from './pacientes-form/pacientes-form.component';
import { PacientesListaComponent } from './pacientes-lista/pacientes-lista.component';


const routes: Routes = [
  {path : 'pacientes-form', component : PacientesFormComponent},
  {path : 'pacientes-form/:id', component : PacientesFormComponent},
  {path : 'pacientes-lista', component : PacientesListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientesRoutingModule { }
