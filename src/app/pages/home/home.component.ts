import { Component, OnInit } from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] = [
    {
      id: 'hash123',
      title: 'TOMATOES',
      description: 'RED TOMAT',
      image: 'tomato.jpg',
      price: 30,
      stars: 4
    },
    {
      id: 'hash123',
      title: 'TOMATOES',
      description: 'RED TOMAT',
      image: 'tomato.jpg',
      price: 30,
      stars: 4
    },
    {
      id: 'hash123',
      title: 'TOMATOES',
      description: 'RED TOMAT',
      image: 'tomato.jpg',
      price: 30,
      stars: 4
    },
    {
      id: 'hash123',
      title: 'TOMATOES',
      description: 'RED TOMAT',
      image: 'tomato.jpg',
      price: 30,
      stars: 4
    },
    {
      id: 'hash123',
      title: 'TOMATOES',
      description: 'RED TOMAT',
      image: 'tomato.jpg',
      price: 30,
      stars: 4
    },
    {
      id: 'hash123',
      title: 'TOMATOES',
      description: 'RED TOMAT',
      image: 'tomato.jpg',
      price: 30,
      stars: 4
    },
    {
      id: 'hash123',
      title: 'TOMATOES',
      description: 'RED TOMAT',
      image: 'tomato.jpg',
      price: 30,
      stars: 4
    },
    {
      id: 'hash123',
      title: 'TOMATOES',
      description: 'RED TOMAT',
      image: 'tomato.jpg',
      price: 30,
      stars: 4
    },
    {
      id: 'hash123',
      title: 'TOMATOES',
      description: 'RED TOMAT',
      image: 'tomato.jpg',
      price: 30,
      stars: 4
    },
    {
      id: 'hash123',
      title: 'TOMATOES',
      description: 'RED TOMAT',
      image: 'tomato.jpg',
      price: 30,
      stars: 4
    }
  ]  

  constructor() { }

  ngOnInit(): void {
  }
  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
