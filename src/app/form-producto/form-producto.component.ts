import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-producto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-producto.component.html',
  styleUrl: './form-producto.component.css'
})
export class FormProductoComponent implements OnInit {

  @Output() eventoGuardarProducto = new EventEmitter<any>();
  formProductoGroup!: FormGroup;

  constructor(private fb: FormBuilder) {
    
  }


  ngOnInit() {

    this.formProductoGroup = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      precio: ['0', [Validators.required]]
    });

  }

  onSubmit(form: FormGroup) {
    if(form.valid) {
      let producto = { 
        id: new Date().getTime(),
        nombre: form.value.nombre, 
        precio: form.value.precio }
      ;  
      this.eventoGuardarProducto.emit(producto);
    }
  }


}
