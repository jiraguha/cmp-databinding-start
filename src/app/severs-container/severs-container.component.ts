import {Component, Input, OnInit} from '@angular/core';
import {Server} from '../server';
import {ServerType} from '../server-type.enum';

@Component({
  selector: 'app-severs-container',
  templateUrl: './severs-container.component.html',
  styleUrls: ['./severs-container.component.css']
})
export class SeversContainerComponent implements OnInit {

  @Input() server: Server;

  constructor() {
  }

  ngOnInit() {
  }

  blueprintCkeck() {
    return this.server.type === ServerType.BLUEPRINT;
  }

  serverCkeck() {
    return this.server.type === ServerType.SERVER;
  }
}
