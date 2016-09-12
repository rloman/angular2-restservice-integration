import {Component} from 'angular2/core'
import {PostService} from './post.service'
import {HTTP_PROVIDERS} from 'angular2/http'

@Component({
	selector: 'posts', 
	templateUrl: 'app/posts.template.html' 
, 
	providers: [PostService, HTTP_PROVIDERS]
})
export class PostsComponent {


	title: string = 'Overview of Posts' ;

	posts : Array<any>;

	
	constructor(private _postService: PostService) {
		this._postService.getPosts()
			.subscribe(posts => console.log(posts) );
		
	}
}
