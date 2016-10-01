import {Component} from 'angular2/core'
import {AddressService} from './address.service'
import {Address} from './address';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	selector: 'addresses', 
	templateUrl: 'app/addresses.component.html' 
, 
	providers: [AddressService, HTTP_PROVIDERS],
	directives: [ROUTER_DIRECTIVES]
})
export class AddressesComponent {


	addresses: Address[]  ;

	constructor(addressService: AddressService) {
		addressService.getAddresss().subscribe(addresses => this.addresses = addresses);
	}
}
