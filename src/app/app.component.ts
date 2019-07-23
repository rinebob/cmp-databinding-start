import { Component,   OnInit } from '@angular/core';
import { ActiveUsersService } from './active-users.service';
import { CounterService } from './counter.service';



// import { AccountsService } from './accounts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ActiveUsersService, CounterService]
})
export class AppComponent implements OnInit {
  // SERVICES ASSIGNMENT
  // this is starting code and was replaced by assignment code
  // activeUsers = ['Max', 'Anna'];
  // inactiveUsers = ['Chris', 'Manu'];

  ngOnInit() {}

  // onSetToInactive(id: number) {
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  // }

  // onSetToActive(id: number) {
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  // }
  // DATABINDING AND DIRECTIVES
  // code for directives and data binding course sections
  // serverElements = [{type: 'server', name: 'TestserverDude', content: 'Freakin test dude'}];

  // 	onServerAdded(serverData: {serverName: string, serverContent: string}) {
	// 	this.serverElements.push({
	// 		type: 'server',
	// 		name: serverData.serverName,
	// 		content: serverData.serverContent
	// 	});
	// }

	// onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
	// 	this.serverElements.push({
	// 		type: 'blueprint',
	// 		name: blueprintData.serverName,
	// 		content: blueprintData.serverContent
	// 	});
  // }

  // SERVICES
  // code for services course section
  // note: accounts array/data moved to AccountsService in Lec 107
  // methods also moved to the service and deleted from here
  // this is the new accountsService results holder
    // accounts: {name: string, status: string}[] = [];
    // constructor(private accountsService: AccountsService){}

    // ngOnInit() {
    //   this.accounts = this.accountsService.accounts;
    // }

}
