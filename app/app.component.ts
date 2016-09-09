import {Component} from 'angular2/core'
import {PostsComponent} from './posts.component'

@Component({
	selector: 'my-app', 
	templateUrl: 'app/app.template.html' 
, 
	directives: [PostsComponent]
})
export class AppComponent {

}
