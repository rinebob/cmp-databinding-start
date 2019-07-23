import { Component, OnInit } from '@angular/core';

import { ActiveUsersService } from './../active-users.service';
import { CounterService } from './../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users = [];
  count: number;

  constructor(private activeUsersService: ActiveUsersService,
              private counterService: CounterService) {
  }

  ngOnInit() {
    this.users = this.activeUsersService.getInactiveUsers();
    this.count = this.counterService.getCount();
    this.counterService.countUpdated.subscribe(
        (count: number) => {
        this.count = this.counterService.getCount();
      }
    );
  }

  onSetToActive(id: number) {
    this.activeUsersService.onSetToActive(id);
    this.counterService.updateCount();
    this.count = this.counterService.getCount();
  }

  onCountUpdated(){
  }

}

// console.log("200 i-u.c.ts ngOI calling getIUs() ")
//   console.log("200 i-u.c.ts subscribe updated id = ",id)
//   console.log("202 i-u.c.ts subscribe calling getIUs()")
// console.log("204 i-u.c.ts subscribe IUs = ",this.users);
