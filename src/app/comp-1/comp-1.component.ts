import { CoursesService } from './../AlltheServices/courses.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-comp-1',
  templateUrl: './comp-1.component.html',
  styleUrls: ['./comp-1.component.css']
})
export class Comp1Component implements OnInit {

  courses;
  flag = true;  
  imgURL = 'http://www.gstatic.com/webp/gallery/1.jpg'; 
  constructor(service: CoursesService) { 
    this.courses = service.getCourses();
  }
ngOnInit(){

}
  // amarform;
  // ngOnInit() {
  //   this.amarform = new FormGroup({

  //   });
  // }
  title = "Ahsan Raja Chowdhury Farhan Rumana Nazmul Liza Sabriyah Sahira Ahsan Adeepta";
  getTitle(){
    return this.title;
  }
  buttonPressed(){
    console.log("pressed");
    if(this.flag==true){
      this.flag = false;
      console.log("Here");
      this.imgURL = 'http://www.gstatic.com/webp/gallery/2.jpg';
    }
    else{
      this.flag = true;
      this.imgURL = 'http://www.gstatic.com/webp/gallery/1.jpg';
    }
  
  }
  

}
