import { Component, OnInit } from '@angular/core';

import { ActiveUsersService } from './../active-users.service';
import { CounterService } from './../counter.service';


@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users = [];

  constructor(private activeUsersService: ActiveUsersService,
              private counterService: CounterService) {}

  ngOnInit() {
    this.users = this.activeUsersService.getActiveUsers();
  }

  onSetToInactive(id: number) {
    this.activeUsersService.onSetToInactive(id);
    this.counterService.updateCount();
  }
}

// console.log("100 a-u.c.ts ngOI calling getAUs() ");
// console.log("100 a-u.c.ts subscribe updated id = ",id);
// console.log("102 a-u.c.ts subscribe calling getAUs()");
// console.log("104 a-u.c.ts subscribe AUs = ",this.users);
