import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navOpen=false;
  constructor() { }
  

  ngOnInit(): void {
  }
  navbar(){
    this.navOpen=!this.navOpen;
  }
  

}
