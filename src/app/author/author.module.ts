import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorpageComponent } from './authorpage.component';
import { AuthorlistComponent } from './authorlist.component';
import { AuthordetailComponent } from './authordetail.component';
import { AuthorService } from './author.service';
import { AUTHOR_ROUTES } from './author.routing';
import { Form1Component } from './form1.component';
import { HttpModule } from '@angular/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AuthorComponent } from './author.component';

@NgModule({
  imports: [
    CommonModule,
    AUTHOR_ROUTES,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ AuthorpageComponent ],
  providers: [ AuthorService ],
  declarations: [AuthorpageComponent, AuthorlistComponent, AuthordetailComponent,  Form1Component, AuthorComponent]
})
export class AuthorModule { }
