import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-renderproducts',
  templateUrl: './renderproducts.component.html',
  styleUrls: ['./renderproducts.component.scss']
})
export class RenderproductsComponent implements OnInit {

  @Input() title: string = ""
  @Input() products: Product[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
