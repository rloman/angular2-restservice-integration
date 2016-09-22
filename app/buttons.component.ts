import {Component} from 'angular2/core'

@Component({
	selector: 'buttons', 
	template: `
		
		{{ title }}<br/>
		<div (click)='onDivClick($event);'><br/>
Voornaam: {{firstName}}
<br/>
			<input type='text' [(ngModel)]='firstName' />
<br/>
			<button  class='btn btn-primary'  [class.active]='isActive' (click)='onButtonClick($event);'>click me
			</button>
		</div>
		`
})
export class ButtonsComponent {

	title: string = 'Overview of buttons'


	firstName: string = 'Sinterklaas';



	isActive = true; // amend if necessary

	onDivClick($event) {
		console.log('You clicked a Div widget', $event);
	}



	onButtonClick($event) {
		console.log('You clicked a Button widget', $event);
	}

}
