import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/pacientes/paciente';
import { PacientesService } from '../../pacientes.service';
import { Consulta } from '../consulta';
import { ConsultasService } from 'src/app/consultas.service';
import { Router, ActivatedRoute } from '@angular/router';


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
  success : boolean;
  errors : String[];
  id : number;

  constructor(private servicoPaciente : PacientesService, 
              private servicoConsulta : ConsultasService,
              private router : Router,
              private activatedRoute : ActivatedRoute) { 
    this.consulta = new Consulta();
  }

  ngOnInit(): void {


    let params = this.activatedRoute.params;
    params.subscribe(response => {
      this.id = response.id;
    });

    if (this.id != null){
      this.servicoConsulta.getConsultaById(this.id).subscribe(res =>{
        this.consulta = res;
        console.log('aaaa');
      }, erro => {
        console.log("consulta nao existe");
      });
    }else{
      this.servicoPaciente
      .getPacientes()
      .subscribe( response => this.pacientes = response);
    }
  }

  onSubmit(){
    if(this.montaInstante()){
      this.servicoConsulta
      .postConsulta(this.consulta)
      .subscribe( () => {
        this.success=true
        this.errors = null;
      }, respostaErro => {
        this.success = false;
        this.errors = respostaErro.error.errors;
      });
    }else{
      this.success = false;
    }

  }

  voltarParaListagem(){
    this.router.navigate(['/consultas']);
  }

  montaInstante() : boolean{
    if(this.data && this.hora){
      this.consulta.instante = this.data.concat((' '+ this.hora));
      return true;
    }
    else {
      console.log('sem data e hora');
      return false
    }

  }
}
