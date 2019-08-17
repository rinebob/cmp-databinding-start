import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  signupForm: FormGroup;
  forbiddenProjectnames = ['Test'];
  statuses = ['stable', 'critical', 'finished'];
  

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
		// 'projectname': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
		'projectname': new FormControl(null, [Validators.required], this.forbiddenNames.bind(this)),
		'email': new FormControl(null, [Validators.required, Validators.email]),
		'status': new FormControl(this.statuses[0]),
		// 'status': new FormControl(),
		
    });
  }
  onSubmit() {
    console.log(this.signupForm.value);
    console.log(this.signupForm);
};

//   forbiddenNames(control: FormControl): {[s: string]: boolean} {
//     if (this.forbiddenProjectnames.indexOf(control.value) !== -1 ){
//       return {'nameIsForbidden': true};
//     }
//     return null;
//   }

	forbiddenNames(control: FormControl): Promise<any> | Observable<any> {
		const promise = new Promise<any>((resolve, reject) => {
			setTimeout(() => {
				if (this.forbiddenProjectnames.indexOf(control.value) !== -1 ){
					console.log('name is forbidden dude');
					resolve({'nameIsForbidden': true});
				} else {
					resolve(null);
				}
			}, 1500);
		});
		return promise;
	}

}

// FULL CONTROLLER CODE FROM LECTURES

// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
// import { Observable } from 'rxjs/Observable';

// @Component({
//   selector: 'app-reactive',
//   templateUrl: './reactive.component.html',
//   styleUrls: ['./reactive.component.css']
// })
// export class ReactiveComponent implements OnInit {
//   genders = ['male', 'female'];
//   signupForm: FormGroup;
//   forbiddenUsernames = ['chris', 'anna', 'dude'];

//   constructor() { }

//   ngOnInit() {
//     this.signupForm = new FormGroup({
//       'userData': new FormGroup({
//         'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
//         'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
//       }),
//       'gender': new FormControl('male'),
//       'hobbies': new FormArray([])
//     });
// 	this.signupForm.valueChanges.subscribe(
// 		(value) => {
// 			// console.log(value);
// 		}
// 	);
// 	this.signupForm.statusChanges.subscribe(
// 		(status) => {
// 			// console.log(status);
// 		}
// 	);
// 	this.signupForm.setValue(
// 		{
// 			'userData': {
// 				'username': 'dudeness',
// 				'email': 'dude@dude.com'
// 			},
// 			'gender': 'non-binary',
// 			'hobbies': []
// 		}
// 	);
// 	this.signupForm.patchValue(
// 		{
// 			'gender': 'male'
// 		}
// 	);
//   }

//   onSubmit() {
//     console.log(this.signupForm);
// 	this.signupForm.reset(
// 		{
// 		userData: {
// 			username: '',
// 			email: ''
// 		},
// 		gender: 'male',
// 		hobbies: []
// 		}
// 	);
//   };

//   getControls(){
//     const controls = (<FormArray>this.signupForm.get('hobbies')).controls;
//     return controls;
//   }

//   onAddHobby() {
//     const control = new FormControl(null, Validators.required);
//     (<FormArray>this.signupForm.get('hobbies')).push(control)
//   }

//   forbiddenNames(control: FormControl): {[s: string]: boolean} {
//     if (this.forbiddenUsernames.indexOf(control.value) !== -1 ){
//       return {'nameIsForbidden': true};
//     }
//     return null;
//   }

//   forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
// 	const promise = new Promise<any>((resolve, reject) => {
// 		setTimeout(() => {
// 			if (control.value === 'test@test.com'){
// 				resolve({'emailIsForbidden': true});
// 			} else {
// 				resolve(null);
// 			}
// 		}, 1500);
// 	});
// 	return promise;
// }

// }
