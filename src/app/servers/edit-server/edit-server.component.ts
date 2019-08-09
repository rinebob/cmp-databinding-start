import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;
  // id: number;

  constructor(private serversService: ServersService,
          private route: ActivatedRoute,
          private router: Router ) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(
        (queryParams: Params) => {
          this.allowEdit = queryParams['allowEdit'] === '1' ? true : false ;
        });
    this.route.fragment.subscribe();
    let id = +this.route.snapshot.params['id'];
    console.log('init id: ',id)
    this.route.params
      .subscribe(
        (params: Params) => {
          console.log('subscribed id: ',id)
          id = +params['id']
        }
      )
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  canDeactivate():  Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit){
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved ) {
      console.log('dont do it!');
      return confirm('Dude you sure you want to discard yer effin changes???');
    } else {
      return true;
    }
  };

}
