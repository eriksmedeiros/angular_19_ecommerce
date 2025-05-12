import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // Define o login object com propriedades userName e password vazias
  loginObj: any =  {
    userName: '',
    password: ''
  }

  // Injeta o Router no construtor para navegação
  constructor(private router: Router){}

  onLogin() {
    if (this.loginObj.userName === 'admin' && this.loginObj.password === 'admin') {
      // Usa o Router para navegar para a página de produtos se o login for bem-sucedido
      this.router.navigateByUrl('/products');
    } else {
      // Exibe um alerta se o login falhar
      alert('Login failed!');
    }
  }
}
