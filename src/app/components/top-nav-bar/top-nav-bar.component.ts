import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopNavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
