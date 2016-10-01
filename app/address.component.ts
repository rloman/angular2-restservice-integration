import {Component} from 'angular2/core'
import {AddressService} from './address.service'
import {Address} from './address';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
	selector: 'addresses', 
	templateUrl: 'app/address.component.html' 
, 
	providers: [AddressService, HTTP_PROVIDERS]
})
export class AddressComponent {


	addresses: Address[]  ;

	constructor(addressService: AddressService) {
		addressService.getAddresss().subscribe(addresses => this.addresses = addresses);
	}
}
