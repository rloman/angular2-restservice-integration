import {Component} from 'angular2/core'
import {CustomerService} from './customer.service'
import {Customer} from './customer';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	selector: 'customers', 
	templateUrl: 'app/customers.component.html' 
, 
	providers: [CustomerService, HTTP_PROVIDERS], 
	directives: [ROUTER_DIRECTIVES]
})
export class CustomersComponent {


	customers: Customer[]  ;

	customer: Customer;

	constructor(private _customerService: CustomerService) {
		_customerService.getCustomers().subscribe(customers => this.customers = customers);
	}

	createCustomer() {
		this.customer = {"naam" : "Loman"};

		this._customerService.createWithPost(this.customer).subscribe(
			response => console.log(response)
		);

		console.log(this.customer);
	}
}
