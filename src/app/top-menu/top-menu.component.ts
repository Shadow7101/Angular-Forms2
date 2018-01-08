import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menu1Expanded: boolean = false;

  toggleCollapse(event: any): void {
    this.menu1Expanded = !this.menu1Expanded;
    if (this.menu1Expanded) {
      document.getElementById('menu1Expanded').classList.add('open');
    } else {
      document.getElementById('menu1Expanded').classList.remove('open');
    }
  }


}
