import { User } from "./User";

export class Mechanic {

  id: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  _photoUrl: string;
  position: string;
  workPlace: string;
  workExperience: number;
  clients: Array<User>;
  rating: number;
  comments: Array<any>;
  reviews: Array<any>;
  role: string;
  joinDate: Date;
  isBanned: boolean;


  constructor(id: string, email: string, firstName: string, lastName: string, photoUrl: string,
              position: string, workPlace: string, workExperience: number) {
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.photoUrl = photoUrl;
    this.position = position;
    this.workPlace = workPlace;
    this.workExperience = workExperience;
    this.clients = [];
    this.rating = 0;
    this.comments = [];
    this.reviews = [];
    this.role = 'mechanic';
    this.joinDate = new Date();
    this.isBanned = false;
  }

  set photoUrl(val) {
    if (val) {
      this._photoUrl = val;
    } else {
      this._photoUrl = 'https://www.timeshighereducation.com/sites/default/files/byline_photos/default-avatar.png';
    }
  }

  get photoUrl() {
    return this._photoUrl
  }
}
