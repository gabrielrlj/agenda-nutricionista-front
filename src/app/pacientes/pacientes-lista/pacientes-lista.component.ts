import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { PacientesService } from 'src/app/pacientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pacientes-lista',
  templateUrl: './pacientes-lista.component.html',
  styleUrls: ['./pacientes-lista.component.css']
})
export class PacientesListaComponent implements OnInit {

  pacientes :  Paciente[] = [];
  pacienteSelecionado : Paciente;
  mensagemSucesso : string;
  mensagemErro : string;


  constructor(private servico : PacientesService, private router : Router) { }

  ngOnInit(): void {
    this.servico.getPacientes().subscribe( response => {
      this.pacientes = response;
    }, errorResponse => {
      console.log("nao consegui")
    })
  }

  novoCadastro(){
    this.router.navigate(['/pacientes/form']);
  }

  preparaDel(paciente : Paciente){
    this.pacienteSelecionado = paciente;
  }

  deletarPaciente(){
    this.servico.deletar(this.pacienteSelecionado)
    .subscribe( response => {
      this.mensagemSucesso = 'Paciente removido!'
      this.ngOnInit()
    }, error => {
      this.mensagemErro = "Ocorreu um problema ao deletar o paciente"
    });
  }

}
