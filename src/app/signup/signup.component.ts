import { Component, OnInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];

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
