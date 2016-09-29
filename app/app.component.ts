import {Component} from 'angular2/core'
import {KlantenComponent} from './klanten.component'
import {AdressenComponent} from './adressen.component'
import {RouteConfig, RouterOutlet} from 'angular2/router';
@RouteConfig(
	[
		{path:'klantens', name:'Klantens', component:KlantenComponent}, 
{path:'adressens', name:'Adressens', component:AdressenComponent}, 
	]
)

@Component({
	selector: 'my-app', 
	templateUrl: 'app/app.template.html' 
, 
	directives: [KlantenComponent, AdressenComponent, RouterOutlet]
})
export class AppComponent {

}
