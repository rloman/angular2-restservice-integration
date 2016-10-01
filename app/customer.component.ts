import {Component} from 'angular2/core'
import {CustomerService} from './customer.service'
import {Customer} from './customer';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteParams} from 'angular2/router';

@Component({
	selector: 'customer', 
	templateUrl: 'app/customer.component.html' 
, 
	providers: [CustomerService, HTTP_PROVIDERS], 
	directives: [ROUTER_DIRECTIVES]
})
export class CustomerComponent {


	customer: Customer  ;

	constructor(private _customerService: CustomerService, private _routeParams :RouteParams) {
		_customerService.getCustomer(parseInt(_routeParams.get("id"))).subscribe(customer => this.customer = customer);
	}
}
