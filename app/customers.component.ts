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

	constructor(customerService: CustomerService) {
		customerService.getCustomers().subscribe(customers => this.customers = customers);
	}
}
