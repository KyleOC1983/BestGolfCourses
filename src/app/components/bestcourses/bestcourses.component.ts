import { Component, OnInit } from '@angular/core';
import { NewcourseService } from 'src/app/services/newcourse.service';
import { NewcourseComponent } from '../newcourse/newcourse.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { firestore } from 'firebase';


@Component({
  selector: 'app-bestcourses',
  templateUrl: './bestcourses.component.html',
  styleUrls: ['./bestcourses.component.scss']
})
export class BestcoursesComponent implements OnInit {

  course: Observable<any[]>;

  constructor(private newCourseService: NewcourseService, private firestore: AngularFirestore,) { 
    this.course = firestore.collection('course').valueChanges({ idField: 'id' });
  }


  deleteCourse(id: string){
    console.log(id);
    this.newCourseService.removeCourse(id);
  }

  

  ngOnInit(): void {
  }

}
