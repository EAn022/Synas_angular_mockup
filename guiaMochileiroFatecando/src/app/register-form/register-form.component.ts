import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  isPasswordVisible: boolean = false;
  passwordIcon: string = 'assets/icons/lock-close-icon.svg';

  // Função para alternar a visibilidade da senha
  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
    this.passwordIcon = this.isPasswordVisible 
      ? 'assets/icons/lock-open-icon.svg'  // Ícone de cadeado aberto
      : 'assets/icons/lock-close-icon.svg'; // Ícone de cadeado fechado
  }

  // Função para retornar o tipo do input
  getPasswordInputType(): string {
    return this.isPasswordVisible ? 'text' : 'password';
  }
  
}
