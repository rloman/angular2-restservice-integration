import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
	selector: 'courses', 
	template: `
		
		{{ title }}<h2>Courses</h2> 	<input type='text' autoGrow />
<ul><li *ngFor='#element of courses'>{{ element }}</li></ul>
		`, 
	providers: [CourseService], 
	directives: [AutoGrowDirective]

})
export class CoursesComponent {

	title: string = 'Overview of Courses'

	courses = []

	constructor(courseService: CourseService) {
		this.courses = courseService.getCourses();
	}
}
