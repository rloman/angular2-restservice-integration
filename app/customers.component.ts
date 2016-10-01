import {Component} from 'angular2/core'
import {CustomerService} from './customer.service'
import {Customer} from './customer';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
	selector: 'customers', 
	templateUrl: 'app/customers.component.html' 
, 
	providers: [CustomerService, HTTP_PROVIDERS]
})
export class CustomersComponent {


	customers: Customer[]  ;

	constructor(customerService: CustomerService) {
		customerService.getCustomers().subscribe(customers => this.customers = customers);
	}
}
