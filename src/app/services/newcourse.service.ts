import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class NewcourseService {

  constructor(private firestore: AngularFirestore,) { }

  get golfCourse(){
    return this.firestore.collection('course').valueChanges();
  };

  addCourse(course: string, imgUrl: string){
    this.firestore.collection('course').add({
      course: course,
      imgUrl: imgUrl,

    })
  }


}
