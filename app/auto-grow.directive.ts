import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive ({selector: '[autoGrow]',
	host: {
		'(focus)': 'onFocus()',
		'(blur)': 'onBlur()'
	}

})
export class AutoGrowDirective {

	constructor(private el: ElementRef, private renderer: Renderer) {
	}

	onFocus(){
		// Implement your event handling code here!
		 // Which might be something like this
		this.renderer.setElementStyle(this.el.nativeElement, 'width', '187');
	}

	onBlur(){
		// Implement your event handling code here!
		 // Which might be something like this
		this.renderer.setElementStyle(this.el.nativeElement, 'width', '168');
	}

}