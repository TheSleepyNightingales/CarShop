import {Component, OnInit} from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Car } from '../../shared/models/Car';
import { ActivatedRoute } from '@angular/router';
import { UserServicePubService } from '../user-service-pub.service';
import { AuthService } from '../../auth/auth.service';
import {Repair} from '../../shared/models/Repair';

@Component({
  selector: 'app-add-repair',
  templateUrl: './add-repair.component.html',
  styleUrls: ['./add-repair.component.css']
})
export class AddRepairComponent implements OnInit {
  elementId: string;
  userId: string;
  constructor(private UserService: UserService, private Router: Router, private UserPublicService: UserServicePubService,
              private authService: AuthService,
              private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.elementId = params['licensePlate'];
    });
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['id'];
    });
  }
  onSignUpS(form: NgForm) {
    const mechanic = form.value.mechanic;
    const desciption = form.value.description;
    const type = form.value.type;
    const date = form.value.date;
    const price = form.value.price;
    const repair = new Repair(mechanic, desciption, type, date, price);
    this.UserService.addRepair(repair, this.elementId, this.userId);
    this.Router.navigate(['/']);
  }
}
