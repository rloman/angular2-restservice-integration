import {Component} from 'angular2/core'
import {CustomersComponent} from './customers.component'
import {AddressesComponent} from './addresses.component'
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';
@RouteConfig(
	[
		{path:'customers', name:'Customers', component:CustomersComponent, useAsDefault:true}, 
		{path:'addresses', name:'Addresses', component:AddressesComponent, }, 
		{path:'addresses/:id', name:'Adres', component:AddressesComponent, },
		{path:'/*other', name:'Other', redirectTo: ['Customers']}	]
)

@Component({
	selector: 'my-app', 
	templateUrl: 'app/app.component.html' 
, 
	directives: [CustomersComponent, AddressesComponent, RouterOutlet, RouterLink]
})
export class AppComponent {

}
