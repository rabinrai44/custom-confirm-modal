import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pickingMenu: any = [
    { id: 1, name: 'Picking' },
    { id: 2, name: 'Distribution' },
    { id: 3, name: 'Suppervisor' },
    { id: 4, name: 'Log off' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
