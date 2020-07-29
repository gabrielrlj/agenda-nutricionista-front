import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { PacientesService } from 'src/app/pacientes.service';
import { Nutricionista } from '../../login/nutricionista';
import { Router, ActivatedRoute } from '@angular/router';

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
  id : number;

  constructor( 
    private service : PacientesService, 
    private router : Router,
    private activatedRoute : ActivatedRoute
    ) {

    this.nutricionista = new Nutricionista();
    this.paciente = new Paciente();
    
  }

  ngOnInit(): void {
    this.service.obterIdLogado()
      .subscribe( response => {
        this.nutricionista = response;
        this.paciente.nutricionista = this.nutricionista;
      }, error =>{
        console.log(error)
      });

    let params = this.activatedRoute.params;
    params.subscribe(response => {
      this.id = response.id;
    });

    if (this.id != null){
      this.service.getPacienteById(this.id).subscribe(res =>{
        this.paciente = res;
    
      }, erro => {
        console.log("cliente nao existe");
      });
    }
  }


  onSubmit(){
    
    if(this.id){
      this.service.atualizar(this.paciente).subscribe(response => {
        console.log('existe um Id');
        this.success = true;
        this.errors = null;
      }, erro => {
        this.errors = ['ERRO AO ATUALIZAR PACIENTE']
      });
    }else{
      console.log(this.paciente);
      this.service
      .salvar(this.paciente)
      .subscribe( response => {
        console.log(response);
        this.success = true;
        this.errors = null;
        this.paciente = response;
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      })
    }
  }

   
  voltarParaListagem(){
      this.router.navigate(['/pacientes/lista']);
  }
 

}
