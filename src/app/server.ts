import {ServerType} from './server-type.enum';

export class Server {

  private _type: ServerType;
  private _serverName: string;
  private _serverContent: string;


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
  }
}
