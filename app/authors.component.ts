import {Component} from 'angular2/core'
import {AuthorService} from './author.service'

@Component({
	selector: 'authors', 
	template: `
		
		{{ title }}<h2>Authors</h2>
<ul><li *ngFor='#element of authors'>{{ element }}</li></ul>
		`, 
	providers: [AuthorService]
})
export class AuthorsComponent {

	title: string = 'Overview of Authors'

	authors = []

	constructor(authorService: AuthorService) {
		this.authors = authorService.getAuthors();
	}
}
