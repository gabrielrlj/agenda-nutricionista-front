import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from './pacientes/paciente';
import { Observable } from 'rxjs';
import { environment  } from '../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
 
  apiURL :  string = environment.apiURl + 'pacientes';

  constructor( private http : HttpClient, private authService: AuthService) { }


  obterIdLogado( ) : Observable<any>{
    const emailNutri = this.authService.getNutriAutenticado();

    return this.http.get<any>(`${environment.apiURl}nutricionistas/email/${emailNutri}`);
  }

  salvar(paciente : Paciente) : Observable<Paciente>{
 
    return this.http.post<Paciente>(this.apiURL, paciente);
  }

  atualizar(paciente : Paciente) : Observable<any>{
    return this.http.put<any>(`${this.apiURL}/${paciente.id}`, paciente);
  }

  getPacientes() : Observable<Paciente[]>{
    return this.http.get<Paciente[]>(this.apiURL);
  }

  getPacienteByNutricionista(id : number)  : Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${this.apiURL}/nutri/${id}`);
  }

  getPacienteById(id : number)  : Observable<Paciente> {
    return this.http.get<Paciente>(`${this.apiURL}/${id}`);
  }

  deletar(paciente : Paciente) : Observable<any>{
    console.log(paciente.id);
    return this.http.delete(`${this.apiURL}/${paciente.id}`);
  }


}
