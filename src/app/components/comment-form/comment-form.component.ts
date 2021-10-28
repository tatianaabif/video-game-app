import { ServerService } from './../../services/server.service';

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  
  @Input() GameId!: string; 
  public commentForm! : FormGroup ; 


  constructor(private _formBuiler : FormBuilder, private _service : ServerService) {}

  ngOnInit(): void {
    this.commentForm = this._formBuiler.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      comment: ['', Validators.maxLength(500)]
    })
  }

  onSubmit() {
    if(!this.commentForm.valid)
      console.error("Invalid form...");
    else {
      console.log(this.commentForm);
      let comment = {
        Name : this.commentForm.value["name"],
        Email : this.commentForm.value["email"],
        Comment : this.commentForm.value["comment"],
        GameId : this.GameId
      };
      this._service.postComment(comment).subscribe(data => console.log("look in Nodejs..."))
    }
  }

}
