import {Component} from 'angular2/core'
import {liebregtsklantenComponent} from './liebregtsklanten.component'

@Component({
	selector: 'my-app', 
	templateUrl: 'app/app.template.html' 
, 
	directives: [liebregtsklantenComponent]
})
export class AppComponent {

}
