import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
	selector: '[autogrow]',	
	host: {
		'(focus)' : 'onFocus()',
		'(blur)': 'onBlur()'
	}
})
export class AutoGrowDirective {

	private el: HTMLElement;

	constructor(el: ElementRef){
		this.el = el.nativeElement;
		this.el.style.width = '200';
	}

	onFocus() {
		this.el.style.width = '200';
	}

	onBlur() {
			this.el.style.width = '100';
	}
	
}