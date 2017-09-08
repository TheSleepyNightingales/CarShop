import { Component, OnInit } from '@angular/core';
import { MechanicService } from '../mechanic.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from "../../auth/auth.service";
import { FirebaseListObservable } from "angularfire2/database";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-mechanic-comments',
  templateUrl: './mechanic-comments.component.html',
  styleUrls: ['./mechanic-comments.component.css']
})
export class MechanicCommentsComponent implements OnInit {

  isSingIn;
  comments: FirebaseListObservable<any>;

  constructor(private MechanicService: MechanicService, private AuthService: AuthService,
  private ActivatedRoute: ActivatedRoute) {
  }


  ngOnInit() {
    this.isSingIn = this.AuthService.currentUser();
    const id = this.ActivatedRoute.snapshot.params['id'];
    this.comments = this.MechanicService.listComments(id);
  }

  createComment(form: NgForm) {
    const comments = form.value.comments;
    const author = this.AuthService.currentUser().email;
    const comment = {
      author: author,
      content: comments,
      createdOn: new Date().toString(),
    };
    const id = this.ActivatedRoute.snapshot.params['id'];
    this.MechanicService.addComment(comment, id);
  }
}
