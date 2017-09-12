import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursepageComponent } from './coursepage.component';
import { CourselistComponent } from './courselist.component';
import { CourseService } from './course.service';
import { COURSE_ROUTES } from './course.routing';
import { CoursedetailComponent } from './coursedetail.component';
//import { CourseComponent } from './course.component';
import { FormComponent }from './form.component';
import { HttpModule } from '@angular/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { isDevMode } from '@angular/core';

 

@NgModule({
  imports: [
    CommonModule,
    COURSE_ROUTES,
    HttpModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [ CoursepageComponent],
  providers:[ CourseService ],
  declarations: [CoursepageComponent, CourselistComponent, CoursedetailComponent, FormComponent]
})
export class CourseModule { }
