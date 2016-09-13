import {Component, OnInit} from 'angular2/core'
import {PostService} from './post.service'
import {HTTP_PROVIDERS} from 'angular2/http';
import {Post} from './post';

@Component({
	selector: 'posts',
	templateUrl: 'app/posts.template.html'
	,
	providers: [PostService, HTTP_PROVIDERS]
})
export class PostsComponent implements OnInit {


	title: string = 'Overview of Posts';

	private posts: Post[];


	constructor(private _postService: PostService) {

	}

	ngOnInit() {
		this._postService.getPosts()
			.subscribe(posts => this.posts = posts);
	}
}
