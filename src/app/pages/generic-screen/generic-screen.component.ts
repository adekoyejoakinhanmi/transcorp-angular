import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-screen',
  templateUrl: './generic-screen.component.html',
  styleUrls: ['./generic-screen.component.scss']
})
export class GenericScreenComponent implements OnInit {
  mobileOpen = false;
  constructor() { }

  ngOnInit() {
  }
  toggleMobileMenu() {
    this.mobileOpen = !this.mobileOpen;
  }

}
