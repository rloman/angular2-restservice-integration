import {Component} from 'angular2/core'
import {KlantService} from './klant.service'
import {Klant} from './klant';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
	selector: 'klanten', 
	templateUrl: 'app/klanten.template.html' 
, 
	providers: [KlantService, HTTP_PROVIDERS]
})
export class KlantenComponent {


	klanten: Klant[]  ;

	constructor(klantService: KlantService) {
		klantService.getKlants().subscribe(klanten => this.klanten = klanten);
	}
}
