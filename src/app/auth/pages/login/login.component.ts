import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  submit: boolean = false;
  datosNoValidos: boolean = false;
  messageError: string = '';

  miFormulario: FormGroup = this.fb.group ({
    email: ['toni@hola.es', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],

  });

  constructor( private fb: FormBuilder,
                private router: Router,
                private authService: AuthService) { }

    // Mensaje de error en el HTML si no pasa la validación
    esValido(campo: string) {
      return this.miFormulario.controls[campo].errors;
    }

 
  login() {

   this.submit = true;
    console.log(this.miFormulario.value);

    const { email, password } = this.miFormulario.value;

    this.authService.login( email,password )
    .subscribe( ok => {


      if ( ok === true ) {
        this.router.navigateByUrl('/dashboard');
      } else {
        this.datosNoValidos=true;
        this.messageError = ok;
      }
    });

  }

}
