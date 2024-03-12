import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-producto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-producto.component.html',
  styleUrl: './form-producto.component.css'
})
export class FormProductoComponent implements OnInit {

  formProductoGroup!: FormGroup;

  constructor(private fb: FormBuilder) {
    
  }


  ngOnInit() {

    this.formProductoGroup = this.fb.group({
      nombre: ['Test', [Validators.required, Validators.minLength(5)]],
      precio: ['0', [Validators.required]]
    });

  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true / false
    console.log('Nombre', form.value.nombre);
    console.log('Precio', form.value.precio);

    //this.formProductoGroup.patchValue({
    //  nombre: 'Cambio el valor,..,.'
    //});
  }


}
