import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  
  images: string[] = [
    'cherry.png',
    'cherry.png',
    'cherry.png',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
