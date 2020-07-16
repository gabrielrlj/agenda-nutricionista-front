import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacientesFormComponent } from './pacientes-form/pacientes-form.component';


const routes: Routes = [
  {path : 'pacientes-form', component : PacientesFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientesRoutingModule { }
