import { User } from './User';

export class Mechanic {

  id: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  photoUrl: string;
  position: string;
  workPlace: string;
  workExperience: number;
  clients: Array<User>;
  rating: number;
  voters: Array<any>;
  comments: Array<any>;
  reviews: Array<any>;
  role: string;
  joinDate: string;
  isBanned: boolean;


  constructor(id: string, email: string, firstName: string, lastName: string,
              position: string, workPlace: string, workExperience: number) {
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.photoUrl = 'https://www.timeshighereducation.com/sites/default/files/byline_photos/default-avatar.png';
    this.position = position;
    this.workPlace = workPlace;
    this.workExperience = workExperience;
    this.clients = [];
    this.rating = 0;
    this.voters = [];
    this.comments = [];
    this.reviews = [];
    this.role = 'mechanic';
    this.joinDate = new Date().toString();
    this.isBanned = false;
  }
}
