import { Component, OnInit } from '@angular/core';
import {Author } from './author';
import { AuthorService } from './author.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-authorlist',
  template: `
    <div class="panel panel-default">
  <!-- Default panel contents -->
  <div class="panel-heading ">Authors </div>
  <div class="panel-body ">
    <button type= "button" class= "btn btn-primary" (click)="add()">Add</button>
  </div>
  <body>
  <table class= "table table-striped">
  <thead>
  <tr>
    <th>Author Id</th>
     <th>Author Name</th>
    <th>Action</th>
  </tr>
  </thead>
  <tbody>
  <tr *ngFor="let author of authors">
     <td>{{author.authorId}}</td>
     <td><a [routerLink]="['/detail',author.authorId]">{{author.authorName}}</a></td>
     <td>
     <button type="button" class="btn btn-primary" (click)="edit(author.authorId)">Edit</button>
     <button type="button" class="btn btn-primary" (click)="delete(author)">Delete</button>
     </td>
     </tr>
     </tbody>
  </table>
  </body>
  </div>
  <router-outlet></router-outlet>

  `,
  styles: []
})
export class AuthorlistComponent implements OnInit {
 
  authors:Array<Author>=[];

  constructor(private authorService:AuthorService, private router: Router) { }

  ngOnInit() {
    this.authorService.getAuthors().subscribe(response =>{
      this.authors = response.json();
      }, error => console.log(error.json ()));
    }
    edit(authorId:number){
      this.router.navigate(['author/form1', authorId]);
    }

    delete(author:Author){
      this.authorService.deleteAuthor(author.authorId).subscribe(response =>{
          let index = this.authors.indexOf(author);
        this.authors.splice(index,1);
      }, error => console.log(error.json()));
    }

    add(){
      this.router.navigate(['author/form1']);
    }
}