import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit, OnDestroy {

	private firstObsSubscription: Subscription;

  constructor() { }



	ngOnInit() {
		// this.firstObsSubscription = interval(1000).subscribe(count => {
		// 	console.log('count: ',count);
		// })
		const custIntObs = Observable.create(observer => {
			let count = 0;
			setInterval(() => {
				observer.next(count);
				if (count === 2) {
					observer.complete();
				}
				if (count > 3) {
					observer.error(new Error('Dude - count is greater than 3 man!!!'))
				}
				count++;
			}, 1000)
		});
	
		this.firstObsSubscription = custIntObs.subscribe(data => {
			console.log(data);
		}, error => {
			console.log('error: ',error);
			alert(error.message);
		}, () => {
			console.log('completed');
		});
	
	}

	ngOnDestroy() {
		this.firstObsSubscription.unsubscribe();
	}

}
