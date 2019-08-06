import { EventEmitter, Injectable } from '@angular/core';

@Injectable({providedIn: 'root' })
export class CounterService {
  count: number = 0;
  activeToInactive: number = 0;
  inactiveToActive: number = 0;

  countUpdated = new EventEmitter<number>();

  getCount(){
    return this.count;
  }

  updateCount(){
    this.count++;
    console.log("counter svc updateCount.  count: ",this.count)
    this.countUpdated.emit(this.count);
  }

  incrementActiveToInactive() {
    this.activeToInactive++;
    console.log("Active to Inactive: ", this.activeToInactive);
  }

  incrementInactiveToActive() {
	  this.inactiveToActive ++;
	console.log("Inactive to Active: ",this.inactiveToActive);
}



}
