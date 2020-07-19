import { Component, OnInit } from '@angular/core';
import { NewcourseService } from 'src/app/services/newcourse.service';


@Component({
  selector: 'app-bestcourses',
  templateUrl: './bestcourses.component.html',
  styleUrls: ['./bestcourses.component.scss']
})
export class BestcoursesComponent implements OnInit {

  constructor(private newCourse: NewcourseService) { }

  ngOnInit(): void {
  }

}
