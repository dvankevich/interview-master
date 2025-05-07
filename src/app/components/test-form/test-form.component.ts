import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './test-form.component.html',
  styleUrl: './test-form.component.scss'
})
export class TestFormComponent {
  [x: string]: any;

  // custom age validator
  ageValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const isValidAge = value >= 18 && value <=120;
    return isValidAge ? null : { ageInvalid: 'Age must be between 18 and 120'};
  }

  complexForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]), // text
    email: new FormControl('',[Validators.required, Validators.email]), // email
    age: new FormControl(null,[Validators.required, this.ageValidator]), // digit
    password: new FormControl("",[Validators.required, Validators.minLength(6)]), // text (password)
    consent: new FormControl(false,[Validators.requiredTrue]) // boolean (Agreement)
  });

  onSubmit(){
    console.log('Form value', this.complexForm.value);
    console.log("Form status - is valid", this.complexForm.valid);
    console.log("Form controls:", this.complexForm.controls);
  }

  // getters for form fields
  get name(){
    return this.complexForm.get('name');
  }

  get email(){
    return  this.complexForm.get('email');
  }

  get age(){
    return  this.complexForm.get('age');
  }

  get password(){
    return  this.complexForm.get('password');
  }

  get consent(){
    return  this.complexForm.get('consent');
  }

}
