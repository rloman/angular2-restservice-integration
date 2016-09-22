import {Component} from 'angular2/core'
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {ButtonsComponent} from './buttons.component'

@Component({
	selector: 'my-app', 
	template: `
		
<h1>My First Angular App</h1>
		<courses></courses>
		<authors></authors>
		<buttons></buttons>
		`, 
	directives: [CoursesComponent, AuthorsComponent, ButtonsComponent]
})
export class AppComponent {

}
