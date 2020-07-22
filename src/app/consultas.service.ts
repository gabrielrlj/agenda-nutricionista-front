import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consulta } from './consultas/consulta';
import { Observable } from 'rxjs';
import { Paciente } from './pacientes/paciente';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  constructor(private http : HttpClient) { }

  getConsultas() : Observable<Consulta[]>{
    return this.http.get<Consulta[]>('http://localhost:8080/consultas');
  }

  /*getConsultas() : Consulta[]{
    let paciente = new Paciente();
    paciente.id = 1;
    paciente.cpf = "12345678987";
    paciente.idade = 15;
    paciente.nome = "Paulo";
    paciente.sexo = 0;

    let consulta = new Consulta();
    consulta.id = 1;
    consulta.instante = "25/07/2020 14:00";
    consulta.paciente = paciente;

    return [consulta];
  }*/
}
