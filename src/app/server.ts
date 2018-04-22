import {ServerType} from './server-type.enum';
import {ServerStatus} from './server-status.enum';
import {RandomUtils} from './random-utils';

export class Server {

  private _type: ServerType;
  private _serverName: string;
  private _serverContent: string;
  private _status: ServerStatus;


  get status(): ServerStatus {
    return this._status;
  }

  set status(value: ServerStatus) {
    this._status = value;
  }

  get type(): ServerType {
    return this._type;
  }

  set type(value: ServerType) {
    this._type = value;
  }

  get serverName(): string {
    return this._serverName;
  }

  set serverName(value: string) {
    this._serverName = value;
  }

  get serverContent(): string {
    return this._serverContent;
  }

  set serverContent(value: string) {
    this._serverContent = value;
  }


  constructor(type: ServerType, serverName: string, serverContent: string) {
    this._type = type;
    this._serverName = serverName;
    this._serverContent = serverContent;
    this._status = this.defaultStatus();
  }

  private defaultStatus(): ServerStatus {
    switch (RandomUtils.getRandom3state(0.3, 0.6)) {
      case 1:
        return ServerStatus.OFFLINE;
      case 2:
        return ServerStatus.BOOTING;
      case 3:
        return ServerStatus.ONLINE;
      default:
        return ServerStatus.UNKNOWN;
    }
  }
}
