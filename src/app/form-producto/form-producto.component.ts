import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductosService } from '../productos.service';

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

  constructor(private fb: FormBuilder, private productoService : ProductosService) {
    
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


      this.productoService.postProducto(producto.nombre, producto.precio).subscribe(response => {
        console.log('Id generado: ', response.id);
      });

      this.eventoGuardarProducto.emit(producto);
      this.formProductoGroup.patchValue({
        nombre: '',
        precio: '0'
      });
    }
  }


}
