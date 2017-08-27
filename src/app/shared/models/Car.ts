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

  constructor(km: number, make: string, model: string, year: number, power: number, lastOilChange: Date ) {
    this.km = km;
    this.make = make;
    this.model = model;
    this.year = year;
    this.photoUrl = 'https://s3-storage.textopus.nl/wp-content/uploads/2016/01/18010820/apple-car-onder-doek.jpg';
    this.power = power;
    this.lastOilChange = lastOilChange;
    this.comments = [];
    this.rating = 0;
    this.repairs = [];
    this.updates = [];
    this.isDeleted = false;
  }
}
