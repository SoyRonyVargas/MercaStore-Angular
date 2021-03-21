import { Directive, ElementRef , Input , OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{


  constructor( private element: ElementRef ) {
    
    // this.element.nativeElement.style.backgroundColor = "red"

  }
  
  @Input() backgroundColor: string;
  @Input() color: string;

  ngOnInit()
  {

    this.element.nativeElement.style.backgroundColor = this.backgroundColor
    this.element.nativeElement.style.color = this.color

  }

}
