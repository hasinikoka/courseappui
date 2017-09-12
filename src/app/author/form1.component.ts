import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthorService } from './author.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styles: []
})
export class Form1Component implements OnInit, OnDestroy {

  authorForm: FormGroup;
  authorIdSubscription: Subscription;
  authorId:number;

  constructor(private AuthorService: AuthorService, private fb: FormBuilder, private activatedRoute:ActivatedRoute, private router:Router ) { }

  ngOnInit() {
    this.authorForm = this.fb.group({
      authorName: this.fb.control('',[Validators.required]),
    })

    this.authorIdSubscription = this.activatedRoute.params.subscribe((params) => {
      if (params['authorId']!==undefined){
        this.AuthorService.getAuthor(parseInt(params['authorId'])).subscribe(response =>{
          let author = response.json();
          this.authorId = author.authorId;
          this.authorForm.setValue({
            authorName : author.authorName
          });
        },error => console.log(error.json()));
      }
    });
  }
  ngOnDestroy(){
    this.authorIdSubscription.unsubscribe();
  }
  get authorName(){
    return this.authorForm.get('authorName');
  }
  handleFormSubmit(){
    console.log(this.authorForm.value);
    this.authorForm.value.authorId = this.authorId;
    //this.courseForm.value.courseName = this.courseName;    
    this.AuthorService.saveAuthor(this.authorForm.value).subscribe (response =>{
        console.log("here "+response.json());
        this.authorForm.reset();
        console.log("iam here");
        this.router.navigate(['/author/list1']);
    }, error => console.log(error.json()));
  }

}