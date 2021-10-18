import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ApplyComponent } from './apply/apply.component';
import { CoursesenqueryComponent } from './apply/coursesenquery/coursesenquery.component';
import { ShortcourseenqueryComponent } from './apply/shortcourseenquery/shortcourseenquery.component';
import { HomeComponent } from './home/home.component';
import { JobshopComponent } from './jobshop/jobshop.component';
import { NewsComponent } from './news/news.component';
import { SalonComponent } from './salon/salon.component';
import { ShortcoursesComponent } from './shortcourses/shortcourses.component';
import { TraineeshipComponent } from './traineeship/traineeship.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'shortcourses',component:ShortcoursesComponent},
  {path:'traineeship',component:TraineeshipComponent},
  {path:'salon',component:SalonComponent},
  {path:'jobshop',component:JobshopComponent},
  {path:'news',component:NewsComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'apply',component:ApplyComponent,children:[
    {path:'coursesenquery',component:CoursesenqueryComponent},
    {path:'traineeship',component:TraineeshipComponent},
    {path:'shortcourseenquery',component:ShortcourseenqueryComponent},
   
  ]},
  {path:'',redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
