import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Server} from '../server';
import {ServerType} from '../server-type.enum';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<Server>();

  @Output() bluePrintCreated = new EventEmitter<Server>();

  server: Server;


  constructor() {
    this.server = new Server(undefined, '', '');
  }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit(new Server(ServerType.SERVER, this.server.serverName, this.server.serverContent));
  }

  onAddBlueprint() {
    this.serverCreated.emit(new Server(ServerType.BLUEPRINT, this.server.serverName, this.server.serverContent));
  }
}
