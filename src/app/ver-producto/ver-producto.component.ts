import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-producto',
  standalone: true,
  imports: [],
  templateUrl: './ver-producto.component.html',
  styleUrl: './ver-producto.component.css'
})
export class VerProductoComponent {
  productId : string;

  constructor(private actRoute: ActivatedRoute) {
    this.productId = this.actRoute.snapshot.params['id'];
    console.log('id: ', this.productId);
  }
}
