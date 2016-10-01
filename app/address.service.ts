import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Injectable} from 'angular2/core';

import {Address} from './address';

@Injectable()
export class AddressService {


	constructor(private _http:Http) {
	}
	getAddresss() : Observable<Address[]> {
		return this._http.get("http://localhost:8081/api/adressen")
			.map(res => res.json());
	}
}
