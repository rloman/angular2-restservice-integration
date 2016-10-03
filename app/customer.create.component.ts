import {Component} from 'angular2/core'
import {CustomerService} from './customer.service'
import {Customer} from './customer';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteParams} from 'angular2/router';

@Component({
	selector: 'customercreate', 
	templateUrl: 'app/customer.create.component.html' 
, 
	providers: [CustomerService, HTTP_PROVIDERS], 
	directives: [ROUTER_DIRECTIVES]
})
export class CustomerCreateComponent {

	naam : string;
	debiteurennummer: string;


	customer: Customer  ;

	constructor(private _customerService: CustomerService) {
		
	}	


	create() {

		this.customer = {"naam" : this.naam, "debiteurennummer" : this.debiteurennummer};

		this._customerService.createWithPost(this.customer).subscribe(
			response => console.log(response)
		);

		console.log(this.customer);

	}



}
