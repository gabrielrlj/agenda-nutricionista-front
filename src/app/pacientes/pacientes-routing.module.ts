import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacientesFormComponent } from './pacientes-form/pacientes-form.component';
import { PacientesListaComponent } from './pacientes-lista/pacientes-lista.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [

  {path : 'pacientes', component :  LayoutComponent, canActivate: [AuthGuard], children : [
    {path : 'form', component : PacientesFormComponent},
    {path : 'form/:id', component : PacientesFormComponent},
    {path : 'lista', component : PacientesListaComponent},
    {path : '', redirectTo : '/pacientes/lista', pathMatch : 'full'}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientesRoutingModule { }
