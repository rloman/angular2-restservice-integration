import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Injectable} from 'angular2/core';
import {Post} from './post';

@Injectable()
export class PostService {

	constructor(private _http:Http) {

	}


	getPosts : Observable<Post[]>() {
		return this._http.get("http://localhost:8103/api/people")
			.map(res => res.json());
			// return ["a", "b","c"];
	}
}
