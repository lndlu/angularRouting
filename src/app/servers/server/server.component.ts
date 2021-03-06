import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, ParamMap, Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(
      (paramMap: ParamMap) => {
        const id = +paramMap.get('id');
        this.server = this.serversService.getServer(id);
      }
    );
  }

  goToEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
