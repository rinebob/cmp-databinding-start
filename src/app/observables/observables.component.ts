import { Component, OnInit } from '@angular/core';
import { PersonService } from './person.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
	userActivated = false;
	activatedSub: Subscription;

  constructor(private personService: PersonService) { }

  ngOnInit() {
	  this.activatedSub = this.personService.activatedEmitter.subscribe(
		(didActivate) => {
			this.userActivated = didActivate;
		}
	  );
  }

  ngOnDestroy(): void {
		this.activatedSub.unsubscribe();
	}

}
