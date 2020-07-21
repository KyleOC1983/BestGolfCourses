import { Component, OnInit } from '@angular/core';
import { NewcourseService } from 'src/app/services/newcourse.service';
import { NewcourseComponent } from '../newcourse/newcourse.component';


@Component({
  selector: 'app-bestcourses',
  templateUrl: './bestcourses.component.html',
  styleUrls: ['./bestcourses.component.scss']
})
export class BestcoursesComponent implements OnInit {

  constructor(private newCourseService: NewcourseService) { }
  
  imgUrl: string = "https://golfadvisor.brightspotcdn.com/dims4/default/8b36d83/2147483647/strip/true/crop/6000x3583+0+208/resize/1440x860!/format/jpg/quality/90/?url=https%3A%2F%2Fgolfadvisor.brightspotcdn.com%2F33%2Ff0%2Fd8ada9954fe5a64344ff272f4ee2%2Fgoldeneagle-course-1.jpg";
  course = [];
  newCourse = [];

  addCourse(course: string, imgUrl: string){
    this.newCourseService.addCourse(course, imgUrl);
  }

  ngOnInit(): void {
  }

}
