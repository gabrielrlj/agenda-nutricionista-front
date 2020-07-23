import { Component, OnInit } from '@angular/core';
import { Consulta } from '../consulta';
import { ConsultasService } from 'src/app/consultas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultas-lista',
  templateUrl: './consultas-lista.component.html',
  styleUrls: ['./consultas-lista.component.css']
})
export class ConsultasListaComponent implements OnInit {

  consultaSelecionada : Consulta;
  consultas : Consulta[] = [];
  mensagemSucesso : string;
  mensagemErro : string;
  nomeBusca : string;

  constructor(private servico : ConsultasService, private router : Router) { }

  ngOnInit(): void {
    this.servico.getConsultas().subscribe( response => {
      this.consultas = response;
    }, error => {
      console.log(error)
    });
  }

  novoCadastro(){
    this.router.navigate(['/consultas/form']);
  }

  
  preparaDel(consulta : Consulta){
    this.consultaSelecionada = consulta;
  }

  deletarConsulta(){
    this.servico.deletar(this.consultaSelecionada)
    .subscribe( response => {
      this.mensagemSucesso = 'Consulta removida!'
      this.ngOnInit()
    }, error => {
      this.mensagemErro = "Ocorreu um problema ao remover consulta!"
    });
  }

  pesquisar(){
    this.servico.pesquisar(this.nomeBusca)
    .subscribe(response => {
      this.consultas = response;
      
    });
    
  }
}
