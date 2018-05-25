import { CoursesService } from './../AlltheServices/courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-1',
  templateUrl: './comp-1.component.html',
  styleUrls: ['./comp-1.component.css']
})
export class Comp1Component implements OnInit {

  courses;
  constructor(service: CoursesService) { 
    this.courses = service.getCourses();
  }

  ngOnInit() {
  }
  title = "Ahsan Raja Chowdhury";
 

}
