import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from './pacientes/paciente';
import { Observable } from 'rxjs';
import { Nutricionista } from './nutricionistas/nutricionista';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
 
  constructor( private http : HttpClient) { }

  salvar(paciente : Paciente) : Observable<Paciente>{
    return this.http.post<Paciente>('http://localhost:8080/pacientes', paciente);
  }

  atualizar(paciente : Paciente) : Observable<any>{
    return this.http.put<any>(`http://localhost:8080/pacientes/${paciente.id}`, paciente);
  }

  getPacientes() : Observable<Paciente[]>{
    return this.http.get<Paciente[]>('http://localhost:8080/pacientes');
  }

  getPacienteById(id : number)  : Observable<Paciente> {
    return this.http.get<Paciente>(`http://localhost:8080/pacientes/${id}`);
  }

  deletar(paciente : Paciente) : Observable<any>{
    console.log(paciente.id);
    return this.http.delete(`http://localhost:8080/pacientes/${paciente.id}`);
  }


}
