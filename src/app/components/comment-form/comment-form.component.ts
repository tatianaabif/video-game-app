import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  commentForm = new FormGroup({
    name : new FormControl(''),
    comment: new FormControl('')
  });


  constructor() {}
   

  onSubmit() {
    //this.httpClient.post.
    //console.warn(this.commentForm.value.name);
  }

  ngOnInit(): void {


  
  }

}
