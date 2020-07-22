import { Component, OnInit } from '@angular/core';
import { Consulta } from '../consulta';
import { ConsultasService } from 'src/app/consultas.service';

@Component({
  selector: 'app-consultas-lista',
  templateUrl: './consultas-lista.component.html',
  styleUrls: ['./consultas-lista.component.css']
})
export class ConsultasListaComponent implements OnInit {


  consultas : Consulta[] = [];



  constructor(private servico : ConsultasService) { }

  ngOnInit(): void {
    this.servico.getConsultas().subscribe( response => {
      this.consultas = response;
    }, error => {
      console.log(error)
    });
    //this.consultas = this.servico.getConsultas();
  }

}
