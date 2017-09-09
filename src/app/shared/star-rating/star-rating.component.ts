import { Mechanic } from './../models/Mechanic';
import { User } from './../models/User';
import { CarServiceService } from './../../car-service/car-service.service';
import { CarService } from './../models/CarService';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  @Input() detailedUser: CarService | User | Mechanic;
  @Input() currentUid: string;

  public voteSuccess: boolean;
  constructor(private carServiceService: CarServiceService) {
    this.voteSuccess = false;
  }

  ngOnInit() {
  }

  rate(num: number) {
    const vote = { id: this.currentUid, value: num };
    let total = 0;
    let count = 0;
    if (this.detailedUser.voters) {
      const values = Object.values(this.detailedUser.voters);
      const all = Object.keys(this.detailedUser.voters);
      count = values.length;
      total = values.reduce((a, b) => a + b);
      if (all.includes(this.currentUid)) {
        const oldValue = this.detailedUser.voters[this.currentUid];
        count--;
        total -= oldValue;
      }
    }

    total += num;
    count += 1;
    const average = Math.floor(total / count);

    this.carServiceService.updateRating(this.detailedUser.id, average);
    this.carServiceService.updateVoters(this.detailedUser.id, vote);
    this.voteSuccess = true;
    setTimeout(() => {
      this.voteSuccess = false;
    }, 1000);
  }

}
