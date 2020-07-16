import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from './pacientes/paciente';
import { Observable } from 'rxjs';
import { Nutricionista } from './pacientes/nutricionista';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
 
  constructor( private http : HttpClient) { }

  salvar(paciente : Paciente) : Observable<Paciente>{
    return this.http.post<Paciente>('http://localhost:8080/pacientes', paciente);
  }

  getPaciente() : Paciente{
    let p : Paciente = new Paciente();
    p.nome = 'lariosu';
    p.cpf = '1234';
    p.idade = 13;
    p.sexo = 0;
    p.nutricionista = new Nutricionista();
    p.nutricionista.id = 1;
    return p; 
  }


}
