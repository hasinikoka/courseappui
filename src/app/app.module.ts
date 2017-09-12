import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CourseModule } from './course/course.module';
import { AuthorModule } from './author/author.module';
import { APP_ROUTES } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
//import { CourseComponent } from './course.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
   // CourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CourseModule,
    AuthorModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
