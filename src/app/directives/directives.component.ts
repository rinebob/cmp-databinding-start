import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5];
  odds = [1, 3, 5];
  evens = [2, 4];
  onlyOdd = false;
  value = 11;

  constructor() { }

  ngOnInit() {
  }

}
