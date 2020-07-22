import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/pacientes/paciente';
import { PacientesService } from '../../pacientes.service';
import { Consulta } from '../consulta';
import { ConsultasService } from 'src/app/consultas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-consultas-form',
  templateUrl: './consultas-form.component.html',
  styleUrls: ['./consultas-form.component.css']
})
export class ConsultasFormComponent implements OnInit {

  data: String;
  hora: string;
  consulta : Consulta;
  pacientes :  Paciente[] = [];
  success : boolean = false;
  errors : String[];

  constructor(private servicoPaciente : PacientesService, 
              private servicoConsulta : ConsultasService,
              private router : Router) { 
    this.consulta = new Consulta();
  }

  ngOnInit(): void {
    this.servicoPaciente
    .getPacientes()
    .subscribe( response => this.pacientes = response);
  }

  onSubmit(){
    this.montaInstante();
    this.servicoConsulta
    .postConsulta(this.consulta)
    .subscribe( () => this.success=true);
  }

  voltarParaListagem(){
    this.router.navigate(['/consultas-lista']);
  }

  montaInstante(){
    this.consulta.instante = this.data.concat((' '+ this.hora));
  }
}
