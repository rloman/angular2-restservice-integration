import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
	selector: 'favourite', 
	template: `
		
<br/>
		<i  class='glyphicon'  [class.glyphicon-star-empty]='!isFavourite'  [class.glyphicon-star]='isFavourite' (click)='onITagClick($event);' >		</i>
		`
})
export class FavouriteComponent {


	@Input()
	isFavourite: boolean;

	@Output()
	change = new EventEmitter();

	// Add the emitting of the event somewhere. Perhaps here or in some other event handler (e.g. onClick)
	onSomeEvent() {
		this.change.emit({newValue: 'some attribute of this component e.g.: "this.isFavourite" ' });
	}
	// !isFavourite = true; // amend or remove if necessary
	// isFavourite = true; // amend or remove if necessary

	onITagClick($event) {
		console.log('You clicked a ITag widget', $event);
	}

}
