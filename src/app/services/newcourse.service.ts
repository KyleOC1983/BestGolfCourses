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

  imgUrl: string = "https://golfadvisor.brightspotcdn.com/dims4/default/8b36d83/2147483647/strip/true/crop/6000x3583+0+208/resize/1440x860!/format/jpg/quality/90/?url=https%3A%2F%2Fgolfadvisor.brightspotcdn.com%2F33%2Ff0%2Fd8ada9954fe5a64344ff272f4ee2%2Fgoldeneagle-course-1.jpg";
  course = [];
  newCourse: boolean = false;

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
