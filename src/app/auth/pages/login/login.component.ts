import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  submit: boolean = false;

  miFormulario: FormGroup = this.fb.group ({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],

  });

  constructor( private fb: FormBuilder ) { }

    // Mensaje de error en el HTML si no pasa la validación
    esValido(campo: string) {
      return this.miFormulario.controls[campo].errors;
    }

 
  login() {
    this.submit = true;
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);
  }

}
