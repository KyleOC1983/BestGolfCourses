import { Component, OnInit } from '@angular/core';
import { NewcourseService } from 'src/app/services/newcourse.service';
import { NewcourseComponent } from '../newcourse/newcourse.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { firestore } from 'firebase';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-bestcourses',
  templateUrl: './bestcourses.component.html',
  styleUrls: ['./bestcourses.component.scss']
})
export class BestcoursesComponent implements OnInit {

  course: Observable<any[]>;

  constructor(private newCourseService: NewcourseService, private firestore: AngularFirestore, private _snackBar: MatSnackBar) { 
    this.course = firestore.collection('course').valueChanges({ idField: 'id' });
  }


  deleteCourse(id: string){
    console.log(id);
    this.newCourseService.removeCourse(id);
    this._snackBar.open("Yeah, that course stinks.  It's been removed.", '',{
      duration: 2000,
    })
  }

  

  ngOnInit(): void {
  }

}
