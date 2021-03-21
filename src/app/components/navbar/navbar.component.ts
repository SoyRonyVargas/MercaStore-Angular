import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isVisible:boolean = false

  constructor() {
    
  }

  handleVisible( e ) : void {

    e.preventDefault()

    this.isVisible = !this.isVisible

    console.log(this.isVisible);
    

  }
  

  ngOnInit(): void {
    console.log(document.querySelector('.ui.sidebar'));
    // document.querySelector('.ui.sidebar').sidebar('toggle')
  }

}
