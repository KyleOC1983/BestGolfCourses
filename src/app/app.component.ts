import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bestgolfcourse';
  items: Observable<any[]>;

  constructor(firestore: AngularFirestore, public auth: AngularFireAuth, private router: Router) {
    this.items = firestore.collection('items').valueChanges();
  }
  //firebase Login
  login(){
    this.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(res=> this.router.navigate(['/bestcourses']));
  }
  //firebase logout
  logout(){
    this.auth.signOut();
  }
}
