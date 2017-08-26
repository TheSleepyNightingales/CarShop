import { Mechanic } from './Mechanic';
import DateTimeFormat = Intl.DateTimeFormat;

export class Car {
  km: number;

  make: string;

  model: string;

  year: number;

  photoUrl: string;

  power: number;

  lastOilChange: Date;

  comments: Array<any>;

  pendingRepairs: Array<any>;

  rating: number;

  repairs: Array<any>;

  updates: Array<any>;

  isDeleted: boolean;

  constructor(km: number, make: string, model: string, year: number, photoUrl: string, power: number, lastOilChange: Date ) {
    this.km = km;
    this.make = make;
    this.model = model;
    this.year = year;
    this.photoUrl = photoUrl;
    this.power = power;
    this.lastOilChange = lastOilChange;
    this.comments = [];
    this.rating = 0;
    this.repairs = [];
    this.updates = [];
    this.isDeleted = false;
  }
}
