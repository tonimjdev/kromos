import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  submit: boolean = false;
  datosNoValidos: boolean = false;
  messageError: string = '';

  constructor( private fb: FormBuilder,
                private router: Router,
                private authService: AuthService ) { }

  // Validador datos cruzados (match de passwords)*****
  passwordMatch: 
  ValidatorFn = (control: AbstractControl): 
  ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password && confirmPassword && password.value !== confirmPassword.value ? 
  { passwordMatch: true } : null;
};

  miFormulario: FormGroup = this.fb.group ({
    name: ['Toni', [Validators.required ]],
    email: ['toni@hola.es', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    older: [false, [Validators.requiredTrue ]],
  }, {validators: this.passwordMatch});

  // Mensaje de error en el HTML si no pasa la validación
  esValido(campo: string) {
    return this.miFormulario.controls[campo].errors;
  }
  // Registro nuevo usuario
  registro() {
    console.log('Formulario válido?', this.miFormulario.valid);
    console.log('check older 18?', this.miFormulario.controls['older'].value);
    this.submit = true;
   if (this.miFormulario.value.password != this.miFormulario.value.confirmPassword) {
    this.messageError = 'Password no match!'; this.datosNoValidos=true;
    } else if(!this.miFormulario.valid) { return;
  } else {
    const { name, email, password } = this.miFormulario.value;
    this.authService.registro( name, email,password )
    .subscribe( ok => {
      if ( ok === true ) {
        this.router.navigateByUrl('/mycollection');
      } else {
        this.datosNoValidos=true;
        this.messageError = ok;
      }
    });
  }
}
}
