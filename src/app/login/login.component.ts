import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Nutricionista} from './nutricionista';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email : string;
  password : string;
  nome : string;
  crn: string;
  ehCadastro : boolean = false;
  msgSucesso : string;
  errors: String[];
  msgEmail : string;

  constructor(private router : Router, private authService : AuthService) { }

  onSubmit(){
    this.authService
      .tentarLogar(this.email, this.password)
      .subscribe( response => {
        const access_token = JSON.stringify(response);
        localStorage.setItem('access_token', access_token);
        this.router.navigate(['/home'])
      }, responseError => {
        console.log(responseError)
        this.errors = ['Usuário/senha incorretos']
      }) 
  }

  preparaCadastrar(event){
    event.preventDefault();
    this.ehCadastro = true;
  }

  cancelaCadastro(){
    this.ehCadastro = false;
  }

  cadastrar(){
    const nutri :  Nutricionista = new Nutricionista();
    nutri.email = this.email;
    nutri.nome = this.nome;
    nutri.password =  this.password;
    nutri.crn = this.crn;
    nutri.id = null;
    this.authService.salvar(nutri)
      .subscribe( response => {
        this.msgSucesso = "Cadastro realizado com sucesso";
        this.ehCadastro = false;
        this.email = "";
        this.password = "";
        this.errors = [];
      }, errorResponse => {
        this.msgSucesso = null;
        this.errors = errorResponse.error.errors;
        if(!this.errors){
          this.msgEmail = "Email já cadastrado"
        }
      })
  }
}
