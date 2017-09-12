import { RouterModule } from '@angular/router';
import { AuthorpageComponent } from './authorpage.component';
import { AuthorlistComponent } from './authorlist.component';
import { AuthordetailComponent } from './authordetail.component';
import { Form1Component } from './form1.component';

export const AUTHOR_ROUTES = RouterModule.forChild([
    {path:'', component:AuthorpageComponent},
    {path:'', component:AuthorpageComponent, children: [
        {path:'list1', component:AuthorlistComponent},
         {path: 'form1', component : Form1Component},
        {path: 'form1/:authorId', component : Form1Component},
       // {path:'list1', component:AuthorlistComponent, children: [
        //{path:'list1/detail/:authorId/:authorName', component:AuthordetailComponent}
       // ]}
    ]}
])