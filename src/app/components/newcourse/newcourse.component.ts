import { Component, OnInit } from '@angular/core';
import { NewcourseService } from 'src/app/services/newcourse.service';
import * as firebase from 'firebase';


@Component({
  selector: 'app-newcourse',
  templateUrl: './newcourse.component.html',
  styleUrls: ['./newcourse.component.scss']
})
export class NewcourseComponent implements OnInit {

  constructor(private newCourseService: NewcourseService) { }

  provider = new firebase.auth.GoogleAuthProvider();
  course: any;
  newCourse: boolean = false;
  
  addNewCourse(title: string, imgUrl: string){
    this.newCourse = true;
    this.newCourseService.addCourse(title, imgUrl);
  }

  ngOnInit(): void {
    this.newCourseService.golfCourse.subscribe(val => {
      this.course = val;
    })
  }

}
