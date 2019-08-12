import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { PersonService } from '../person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
	id: number;
	
	constructor(private route: ActivatedRoute,
				private personService: PersonService) { }

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.id = +params.id;
		})
	}

	onActivate(){
		// this.personService.activatedEmitter.emit(true);
		this.personService.activatedEmitter.next(true);
	}

	
}

