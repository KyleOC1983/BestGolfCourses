import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BestcoursesComponent } from './components/bestcourses/bestcourses.component';
import { NewcourseComponent } from './components/newcourse/newcourse.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/auth-guard';


const redirectUnauthorizedToBestCourses = () => redirectUnauthorizedTo(['bestcourses']);

const routes: Routes = [
  {path: 'bestcourses', component: BestcoursesComponent},
  {path: 'newcourse', component: NewcourseComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedTo}},
  {path: '**', redirectTo: '/bestcourses'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
