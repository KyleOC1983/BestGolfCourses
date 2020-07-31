import { Component, OnInit } from '@angular/core';
import { NewcourseService } from 'src/app/services/newcourse.service';
import * as firebase from 'firebase';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-newcourse',
  templateUrl: './newcourse.component.html',
  styleUrls: ['./newcourse.component.scss']
})
export class NewcourseComponent implements OnInit {

  constructor(private newCourseService: NewcourseService, private _snackBar: MatSnackBar) { }

  provider = new firebase.auth.GoogleAuthProvider();
 
  
  addNewCourse(title: string, imgUrl: string){
    this.newCourseService.addCourse(title, imgUrl);
    this._snackBar.open("Successfully Added New Course", '',{
      duration: 2000,
    })
    
  }

  ngOnInit(): void {}

}
