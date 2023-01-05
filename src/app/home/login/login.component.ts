import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = '';
  senha = '';

  constructor(
    private authService: AutenticacaoService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  login() {
    this.authService.autenticar(this.user, this.senha).subscribe(
      () => {
        this.router.navigate(['animais'])
      },
      (error) => {
        alert('Autenticação falhou');
        console.log(error);
      }
    );
  }
}
