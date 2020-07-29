import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultasListaComponent } from './consultas-lista/consultas-lista.component';
import { ConsultasFormComponent } from './consultas-form/consultas-form.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [

  {path : 'consultas', component : LayoutComponent, canActivate : [AuthGuard], children : [
    {path : 'lista', component : ConsultasListaComponent},
    {path : 'form/:id', component : ConsultasFormComponent},
    {path : 'form', component : ConsultasFormComponent},
    {path : '', redirectTo : '/consultas/lista', pathMatch : 'full'}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultasRoutingModule { }
