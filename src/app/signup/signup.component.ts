import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('myForm', {static: false}) signupForm: NgForm;
  @ViewChild('f', {static: false}) dudeForm: NgForm;

  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

  // subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSub = 'advanced';
  dude = {
    email: '',
    password: '',
    subscription: ''
  }

  constructor() { }

  ngOnInit() {
  }
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //     userData: {
    //       username: suggestedName,
    //       email: ''
    //     },
    //     secret: 'pet',
    //     questionAnswer: '',
    //     gender: 'male'
    // });
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }


  // onSubmit(form: NgForm){
  //   console.log('Submitted dude!');
  //   console.log(form);
  // }

  onSubmit() {
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.submitted = true;
    console.log("user: ",this.user);
    this.signupForm.reset();
  }

  onFormSubmit(){
    this.dude.email = this.dudeForm.value.email;
    this.dude.password = this.dudeForm.value.password;
    this.dude.subscription = this.dudeForm.value.subscription;
    console.log("dude: ",this.dude);
    this.submitted = true;
    this.dudeForm.reset();
  }

}
