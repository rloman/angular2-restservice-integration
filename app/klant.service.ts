import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Injectable} from 'angular2/core';

import {Klant} from './klant';

@Injectable()
export class KlantService {


	constructor(private _http:Http) {
	}
	getKlanten() : Observable<Klant[]> {
		return this._http.get("http://localhost:8081/api/klanten")
			.map(res => res.json());
	}
}
