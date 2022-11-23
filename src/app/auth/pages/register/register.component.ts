import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  submit: boolean = false;

  constructor( private fb: FormBuilder ) { }

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
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    older: ['', [Validators.required ]],
  }, {validators: this.passwordMatch});

  // Mensaje de error en el HTML si no pasa la validación
  esValido(campo: string) {
    return this.miFormulario.controls[campo].errors;
  }
  registro() {
    this.submit = true;
    if (this.miFormulario.value.password != this.miFormulario.value.confirmPassword) {
      alert ('Password no match!')
    }
    console.log('this.miFormulario.value', this.miFormulario.value);
    console.log('this.miFormulario.valid', this.miFormulario.valid);
  }
}
