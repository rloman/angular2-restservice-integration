import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Injectable} from 'angular2/core';

import {Adres} from './adres';

@Injectable()
export class AdresService {


	constructor(private _http:Http) {
	}
	getAdress() : Observable<Adres[]> {
		return this._http.get("http://localhost:8081/api/adressen")
			.map(res => res.json());
	}
}
