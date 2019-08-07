import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AccountsService } from './accounts.service';
import { LoggingService } from './logging.service';
// import { CounterService } from './counter.service';
import { ServersService } from './servers/servers.service';


import { AppComponent } from './app.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';

// const appRoutes: Routes = [
// 	{ path: '', component: HomeComponent },
// 	{ path: 'users', component: UsersComponent },
// 	{ path: 'users/:id/:name', component: UserComponent },
// 	{ path: 'servers', component: ServersComponent },
// 	{ path: 'servers/:id', component: ServerComponent },
// 	{ path: 'servers/:id/edit', component: EditServerComponent },
// 	// { path: '**', component: HomeComponent },
// ];

const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'users', component: UsersComponent, children: [
		{ path: ':id/:name', component: UserComponent },
	] },
	{ path: 'servers', component: ServersComponent, children: [
		{ path: ':id', component: ServerComponent },
		{ path: ':id/edit', component: EditServerComponent },
	] },
	// { path: '**', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ServerElementComponent,
    CockpitComponent,
    AccountComponent,
    NewAccountComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    HomeComponent,
    ServersComponent,
    EditServerComponent,
    ServerComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  // providers: [AccountsService, LoggingService, CounterService],
  providers: [AccountsService, LoggingService, ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
