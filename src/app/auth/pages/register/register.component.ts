import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  miFormulario: FormGroup = this.fb.group ({
    name: ['Toni', [Validators.required ]],
    email: ['toni@hola.es', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]],
    older: ['', [Validators.required ]],

  });

  matchValidator() {
    let pass1 = this.miFormulario.value.password;
    let pass2 = this.miFormulario.value.confirmPassword;
    let match: boolean;
    (pass1 === pass2) ? match = true : match = false;
    console.log('Pass1: ', pass1);
    console.log('Pass2: ', pass2);
    console.log('Match: ', match);
    return match;
  }

  constructor( private fb: FormBuilder ) { }

  registro() {
    this.matchValidator();
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);
  }

}
