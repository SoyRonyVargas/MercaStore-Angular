import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../productos.service';
import { Product } from '../../product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products:Product[] = []

  constructor( private productsService: ProductosService) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts()
    console.log(this.productsService.getProduct('hash123'));
    
    
  }
  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
