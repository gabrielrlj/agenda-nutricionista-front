import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Nutricionista } from './login/nutricionista';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl : string =  environment.apiURl + "nutricionistas";
  tokenUrl : string = environment.apiURl + environment.token_url;
  clientId: string = environment.clientId;
  clientSecret: string = environment.clientSecret;

  constructor(private http: HttpClient) { }

  salvar(nutricionista: Nutricionista) : Observable<any>{
    return this.http.post<any>(this.apiUrl, nutricionista);
  }

  tentarLogar(email : string, password : string) : Observable<any> {
    const params = new HttpParams()
      .set('username', email)
      .set('password', password)
      .set('grant_type', 'password')

    const headers = {
      'Authorization' : 'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`),
      'Content-Type' : 'application/x-www-form-urlencoded'
    }
    console.log(params.toString())
    return this.http.post(this.tokenUrl, params.toString() , { headers });
  }
}
