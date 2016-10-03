import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Injectable} from 'angular2/core';
import {Headers} from 'angular2/http';
import {RequestOptions} from 'angular2/http';
import {RequestMethod} from 'angular2/http';
import {Request} from 'angular2/http';
import {Response} from 'angular2/http';

import {Customer} from './customer';

@Injectable()
export class CustomerService {

	private headers: Headers;
	private requestoptions: RequestOptions;
	private _url = "http://localhost:8081/api/klanten";


	constructor(private _http: Http) {
	}
	getCustomers(): Observable<Customer[]> {
		return this._http.get("http://localhost:8081/api/klanten")
			.map(res => res.json());
	}

	getCustomer(id: number): Observable<Customer[]> {
		return this._http.get("http://localhost:8081/api/klanten/" + id)
			.map(res => res.json());
	}

	PostRequest(data) {
        this.headers = new Headers();
        this.headers.append("Content-Type", 'application/json');
		// this.headers.append("Authorization", 'Bearer ' + localStorage.getItem('id_token'))

        this.requestoptions = new RequestOptions({
            method: RequestMethod.Post,
            url: this._url,
            headers: this.headers,
            body: JSON.stringify(data)
        })

        return this._http.request(new Request(this.requestoptions))
            .map((res: Response) => {
                if (res) {
					console.log(res);
                    return [{ status: res.status, json: res.json() }]
                }
            });
	}
}
