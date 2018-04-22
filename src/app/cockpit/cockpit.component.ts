import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
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

  @ViewChild('serverNameInput') serverNameInput: ElementRef;

  @ViewChild('serverContentInput') serverContentInput: ElementRef;


  constructor() {
  }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit(new Server(ServerType.SERVER,
      this.serverNameInput.nativeElement.value,
      this.serverContentInput.nativeElement.value));
  }

  onAddBlueprint() {
    this.serverCreated.emit(new Server(ServerType.BLUEPRINT,
      this.serverNameInput.nativeElement.value,
      this.serverContentInput.nativeElement.value));
  }
}
