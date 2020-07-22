import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/pacientes/paciente';
import { PacientesService } from '../../pacientes.service';
import { Consulta } from '../consulta';
import { ConsultasService } from 'src/app/consultas.service';

@Component({
  selector: 'app-consultas-form',
  templateUrl: './consultas-form.component.html',
  styleUrls: ['./consultas-form.component.css']
})
export class ConsultasFormComponent implements OnInit {

  consulta : Consulta;
  pacientes :  Paciente[] = [];

  constructor(private servicoPaciente : PacientesService, private servicoConsulta : ConsultasService) { 
    this.consulta = new Consulta();
  }

  ngOnInit(): void {
    this.servicoPaciente
    .getPacientes()
    .subscribe( response => this.pacientes = response);
  }

  onSubmit(){
    this.servicoConsulta
    .postConsulta(this.consulta)
    .subscribe();
  }
}
