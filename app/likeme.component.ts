import {Component, Input} from 'angular2/core'

@Component({
	selector: 'likes', 
	template: `
		
<br/>
		<i  class='glyphicon glyphicon-heart' 
			[ngClass]="{
				'highlighted': highlighted
			}"
(click)='onITagClick($event);' >		</i>
<br/>
<span>Likes: {{ likes  }}</span> 
		`
})
export class likemeComponent {


	@Input()
	likes: number;
	// highlighted = true; // amend or remove if necessary


	onITagClick($event) {
		console.log('You clicked a ITag widget', $event);
	}


}
