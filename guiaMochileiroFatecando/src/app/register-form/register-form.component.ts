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

  // Controla a visibilidade da primeira e segunda senha
  isPasswordVisible1: boolean = false;
  isPasswordVisible2: boolean = false;

  // Ícones das senhas
  passwordIcon1: string = 'assets/icons/lock-close-icon.svg';
  passwordIcon2: string = 'assets/icons/lock-close-icon.svg';

  // Função para alternar a visibilidade das senhas de acordo com o campo (1 ou 2)
  togglePasswordVisibility(field: number): void {
    if (field === 1) {
      this.isPasswordVisible1 = !this.isPasswordVisible1;
      this.passwordIcon1 = this.isPasswordVisible1 
        ? 'assets/icons/lock-open-icon.svg'  // Ícone de cadeado aberto
        : 'assets/icons/lock-close-icon.svg'; // Ícone de cadeado fechado
    } else if (field === 2) {
      this.isPasswordVisible2 = !this.isPasswordVisible2;
      this.passwordIcon2 = this.isPasswordVisible2 
        ? 'assets/icons/lock-open-icon.svg'  // Ícone de cadeado aberto
        : 'assets/icons/lock-close-icon.svg'; // Ícone de cadeado fechado
    }
  }

  // Função para retornar o tipo do input de acordo com o campo (1 ou 2)
  getPasswordInputType(field: number): string {
    if (field === 1) {
      return this.isPasswordVisible1 ? 'text' : 'password';
    } else if (field === 2) {
      return this.isPasswordVisible2 ? 'text' : 'password';
    }
    return 'password';
  }
}
