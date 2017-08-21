import { Link } from '../../classes/model/link/link';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  links = [
    new Link('http://www.marca.es', 'Marca'),
    new Link('http://www.urjc.es', 'URJC')
  ];

  constructor() { }

  ngOnInit() {
  }

}
