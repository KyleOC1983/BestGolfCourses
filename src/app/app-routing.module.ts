import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BestcoursesComponent } from './components/bestcourses/bestcourses.component';
import { NewcourseComponent } from './components/newcourse/newcourse.component';


const routes: Routes = [
  {path: 'bestcourses', component: BestcoursesComponent},
  {path: 'newcourse', component: NewcourseComponent},
  {path: '**', redirectTo: '/bestcourses'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
