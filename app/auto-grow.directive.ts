import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
	selector: '[autoGrow]',	
	host: {
		'(focus)' : 'onFocus()',
		'(blur)': 'onBlur()'
	}
})
export class AutoGrowDirective {

	constructor(private el: ElementRef){
	}

	onFocus() {
		this.el.nativeElement.style.width = '200';
		this.el.nativeElement.style.backgroundColor="red";
	}

	onBlur() {
		this.el.nativeElement.style.width = '100';
		this.el.nativeElement.style.backgroundColor="white";
	}
	
}