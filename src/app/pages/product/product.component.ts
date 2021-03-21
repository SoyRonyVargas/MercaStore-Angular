import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params } from '@angular/router';
import { ProductosService } from 'src/app/productos.service';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: Product

  constructor( private route: ActivatedRoute , private productsService:ProductosService) { }

  ngOnInit(): void {
    this.route.params.subscribe( (observador: Params) => {
        const { id } = observador
        this.product = this.productsService.getProduct(id)
    })
  }

}
