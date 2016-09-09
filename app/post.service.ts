import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Injectable } from 'angular2/core';

@Injectable()
export class PostService {

	constructor(private _http:Http) {

	}


	getPosts() {
		return this._http.get("http://jsonplaceholder.typicode.com/posts")
			.map(res => res.json());
			// return ["a", "b","c"];
	}
}
