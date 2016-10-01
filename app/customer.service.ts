import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Injectable} from 'angular2/core';

import {Customer} from './customer';

@Injectable()
export class CustomerService {


	constructor(private _http:Http) {
	}
	getCustomers() : Observable<Customer[]> {
		return this._http.get("http://localhost:8081/api/klanten")
			.map(res => res.json());
	}
}
