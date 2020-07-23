import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consulta } from './consultas/consulta';
import { Observable } from 'rxjs';
import { environment  } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  apiURL :  string = environment.apiURl + '/consultas';

  constructor(private http : HttpClient) { }

  getConsultas() : Observable<Consulta[]>{
    return this.http.get<Consulta[]>(`${this.apiURL}`);
  }

  postConsulta(consulta : Consulta) : Observable<any>{
    return this.http.post<Consulta>(`${this.apiURL}`, consulta);
  }

  
  deletar(consulta : Consulta) : Observable<any>{
    console.log(consulta.id);
    return this.http.delete(`${this.apiURL}/${consulta.id}`);
  }

  
  getConsultaById(id : number)  : Observable<Consulta> {
    return this.http.get<Consulta>(`${this.apiURL}/${id}`);
  }

  
  atualizar(consulta : Consulta) : Observable<any>{
    return this.http.put<any>(`${this.apiURL}/${consulta.id}`, consulta);
  }

  pesquisar(nomeBuscado : string) : Observable<Consulta[]>{
    return this.http.get<Consulta[]>(`${this.apiURL}/busca/?nome=${nomeBuscado}`);
  }
}
