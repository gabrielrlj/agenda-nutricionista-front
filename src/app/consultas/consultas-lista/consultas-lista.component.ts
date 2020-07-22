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


  consultas : Consulta[] = [];



  constructor(private servico : ConsultasService, private router : Router) { }

  ngOnInit(): void {
    this.servico.getConsultas().subscribe( response => {
      this.consultas = response;
    }, error => {
      console.log(error)
    });
    //this.consultas = this.servico.getConsultas();
  }

  novoCadastro(){
    this.router.navigate(['/consultas-form']);
  }

}
