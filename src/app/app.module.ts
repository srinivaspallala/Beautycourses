import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShortcoursesComponent } from './shortcourses/shortcourses.component';
import { TraineeshipComponent } from './traineeship/traineeship.component';
import { SalonComponent } from './salon/salon.component';
import { JobshopComponent } from './jobshop/jobshop.component';
import { NewsComponent } from './news/news.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ApplyComponent } from './apply/apply.component';
import { CoursesenqueryComponent } from './apply/coursesenquery/coursesenquery.component';
import { ShortcourseenqueryComponent } from './apply/shortcourseenquery/shortcourseenquery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShortcoursesComponent,
    TraineeshipComponent,
    SalonComponent,
    JobshopComponent,
    NewsComponent,
    AboutusComponent,
    ApplyComponent,
    CoursesenqueryComponent,
    ShortcourseenqueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
