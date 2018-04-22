import {Component} from '@angular/core';
import {Server} from './server';
import {ServerType} from './server-type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  containerName = 'default container';

  getLength() {
    return this.serverElements.length;
  }

  serverElements: Array<Server> = [new Server(ServerType.SERVER, 'Just a test', 'TestServer')];

  onServerCreation(even: Server) {
    this.serverElements.push(even);
  }

  onBlueprintCreation(even: Server) {
    this.serverElements.push(even);
  }
}
