import { Component, OnInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  defaultQuestion = 'dude';
  answer = '';

  constructor() { }

  ngOnInit() {
  }
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: HTMLFormElement){
  onSubmit(form: NgForm){
    console.log('Submitted dude!');
    console.log(form);
  }

}
