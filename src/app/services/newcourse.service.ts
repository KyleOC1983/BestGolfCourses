import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class NewcourseService {

  constructor(private firestore: AngularFirestore,) { }

  newCourse: boolean = false;

  get golfCourse(){
    return this.firestore.collection('course').valueChanges();
  };

  addCourse(course: string, imgUrl: string){
    this.newCourse = true;
    this.firestore.collection('course').add({
      course: course,
      imgUrl: imgUrl,

    })
  }

  removeCourse(course: string, imgUrl: string){
    this.firestore.collection('course').doc('course, imgUrl').delete().then(function() {
      console.log("Document successfully deleted!");
    })
  }

}
