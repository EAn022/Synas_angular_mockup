import { Component } from '@angular/core';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { RegisterImageComponent } from '../register-image/register-image.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RegisterFormComponent,
    RegisterImageComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
