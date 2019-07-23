import { Injectable, EventEmitter } from '@angular/core';

import { CounterService } from './counter.service';

@Injectable()
export class ActiveUsersService {
  activeUsers = ['Dweezil', 'Moonunit'];
  inactiveUsers = ['Alf', 'Ben'];

  statusUpdated = new EventEmitter<number>();

  constructor(private counterService: CounterService){};

  getActiveUsers(){
    return this.activeUsers;
  }

  // add get inactive users method
  getInactiveUsers(){
    return this.inactiveUsers;
  }

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementActiveToInactive();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementInactiveToActive();
  }



}

// console.log("1 svc getActiveUsers. activeUsers = ", this.activeUsers)
// console.log("2 svc getInactiveUsers. inactiveUsers = ", this.inactiveUsers)
// console.log("20 svc onSetToInactive. inactivated user id = ", id)
// console.log("22 svc onSetToInactive. new activeUsers = ", this.activeUsers)
// console.log("24 svc onSetToInactive. new inactiveUsers = ", this.inactiveUsers)
// console.log("10 svc onSetToActive. activated user id = ", id)
// console.log("12 svc onSetToActive. new activeUsers = ", this.activeUsers)
// console.log("14 svc onSetToActive. new inactiveUsers = ", this.inactiveUsers)
