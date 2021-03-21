import { Injectable } from '@angular/core';
import { Product } from './product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

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

  getProducts() : Product[]
  {
    return this.products
  }

  getProduct( id: string ) : Product
  {
    return this.products.find( product => product.id === id )
  }
  

}
