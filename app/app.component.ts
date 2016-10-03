import {Component} from 'angular2/core'
import {CustomersComponent} from './customers.component'
import {CustomerComponent} from './customer.component'
import {AddressesComponent} from './addresses.component'
import {CustomerCreateComponent} from './customer.create.component';
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';
@RouteConfig(
	[
		{path:'customers', name:'Customers', component:CustomersComponent, useAsDefault:true}, 
		{path:'customer/:id', name:'Customer', component:CustomerComponent, }, 
		{path:'addresses', name:'Addresses', component:AddressesComponent, }, 
		{path:'addresse/:id', name:'Addresse', component:AddressesComponent, }, 
		{path:'customer/create', name:'CreateCustomer', component:CustomerCreateComponent },
		{path:'/*other', name:'Other', redirectTo: ['Customers']}	]
)

@Component({
	selector: 'my-app', 
	templateUrl: 'app/app.component.html' 
, 
	directives: [CustomersComponent, CustomerComponent, AddressesComponent, RouterOutlet, RouterLink], 
	directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {

}
