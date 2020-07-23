import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username : string;
  password : string;
  loginError : boolean;
  ehCadastro : boolean = false;

  constructor(private router : Router) { }

  onSubmit(){
    this.router.navigate(['/home']);
  }

  preparaCadastrar(event){
    event.preventDefault();
    this.ehCadastro = true;
  }

  cancelaCadastro(){
    this.ehCadastro = false;
  }
}
