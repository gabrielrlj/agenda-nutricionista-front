import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { PacientesService } from 'src/app/pacientes.service';
import { Nutricionista } from '../nutricionista';

@Component({
  selector: 'app-pacientes-form',
  templateUrl: './pacientes-form.component.html',
  styleUrls: ['./pacientes-form.component.css']
})
export class PacientesFormComponent implements OnInit {

  paciente: Paciente;
  nutricionista: Nutricionista;
  success : boolean = false;
  errors : String[];

  constructor( private service : PacientesService) {
    this.nutricionista = new Nutricionista();
    this.nutricionista.id = 1;
    this.paciente = new Paciente();
    this.paciente.nutricionista = this.nutricionista;
  
  }

  ngOnInit(): void {
  }



    onSubmit(){
      this.service
      .salvar(this.paciente)
      .subscribe( response => {
        this.success = true;
        this.errors = null;
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      })
    }

    /*onSubmit(){
      console.log(this.paciente);
    }*/
  

}
