import {Component} from 'angular2/core'
import {AdresService} from './adres.service'
import {Adres} from './adres';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
	selector: 'adressen', 
	templateUrl: 'app/adressen.template.html' 
, 
	providers: [AdresService, HTTP_PROVIDERS]
})
export class AdressenComponent {


	adressen: Adres[]  ;

	constructor(adresService: AdresService) {
		adresService.getAdress().subscribe(adressen => this.adressen = adressen);
	}
}
