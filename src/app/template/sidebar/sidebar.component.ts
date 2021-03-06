import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  nutricionistaLogado: String;

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
    this.nutricionistaLogado = this.authService.getNutriAutenticado();
  }

  logout(){
    this.authService.encerrarSessao();
    this.router.navigate(['login']);
  }
}
