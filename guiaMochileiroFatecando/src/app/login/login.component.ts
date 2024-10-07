import { Component } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import { LoginImageComponent } from '../login-image/login-image.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ 
    LoginFormComponent,
    LoginImageComponent
   ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
