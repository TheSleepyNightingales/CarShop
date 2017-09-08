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
  itsMe: boolean = false;
  comments: FirebaseListObservable<any>;
  mechanic: FirebaseListObservable<any>;

  constructor(private MechanicService: MechanicService, private AuthService: AuthService,
              private ActivatedRoute: ActivatedRoute) {
  }


  ngOnInit() {
    this.isSingIn = this.AuthService.currentUser();
    const id = this.ActivatedRoute.snapshot.params['id'];
    this.comments = this.MechanicService.listComments(id);
    this.checkIsMyProfile();
  }

  checkIsMyProfile() {
    const currentUserId = this.AuthService.currentUser().uid;
    const wantedId = this.ActivatedRoute.snapshot.params['id'];
    if (currentUserId === wantedId) {
      this.itsMe = true;
    }
    return this.itsMe;
  }

  hack(val) {

    const result = Object.keys(val).map(function (key) {
      return [Number(key), val[key]];
    });

    return result;
  }

  createComment(form: NgForm) {
    const comments = form.value.comments;
    const authorId = this.AuthService.currentUser().uid;
    this.MechanicService.getCurrentUser(authorId)
      .subscribe((data) => {
        const comment = {
          author: data,
          content: comments,
          createdOn: new Date().toString(),
        };
        const id = this.ActivatedRoute.snapshot.params['id'];
        this.MechanicService.addComment(comment, id);
      });
  }
}
