import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  
  
  

  constructor(public auth: AngularFireAuth, private router: Router, private _snackBar: MatSnackBar) {
    
  }

  moveToNewCourses(){
    this.router.navigate(['/newcourse']);
    this._snackBar.open("Only Kyle Can See This Page", '',{
      duration: 2000,
    })    
  }
  //firebase Login
  login(){
    this.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(res=> this.router.navigate(['/bestcourses']));
    this._snackBar.open("Successfully Logged In", '',{
      duration: 2000,
    })
  }
  //firebase logout
  logout(){
    this.auth.signOut();
    this._snackBar.open("Successfully Logged Out", '',{
      duration: 2000,
    })
  }

}
