import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class exportJsonService {
    constructor(public http:Http) {}

getData() {
    return this.http.get("assets/data/data.json")
        .map((res:Response) => res.json().imagearray); //imagearray in this case
  }
}