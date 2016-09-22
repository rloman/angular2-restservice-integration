import {Component} from 'angular2/core'
import {SummaryPipe} from './summary.pipe'

@Component({
	selector: 'samenvatting', 
	template: `
		
<br/>
<span>Firstname: {{ firstName  | uppercase | summary:3 }}</span> 
<br/>
