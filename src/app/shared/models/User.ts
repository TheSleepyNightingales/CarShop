import { Car } from './Car';
import { Mechanic } from './Mechanic';
import { Offer } from "./Offer";

export class User {
    id: string;
    email: string;

    firstName: string;

    lastName: string;

    shortIntro: string;

    photoUrl: string;

    role: string;

    myCars: Array<Car>;

    reviews: Array<any>;

    comments: Array<any>;

    rating: number;

    voters: Array<any>;

    myMechanics: Array<Mechanic>;

    myFriends: Array<User>;

    myFollowers: Array<User>;

    offers: Array<Offer>;

    joinDate: Date;

    isBanned: boolean;

    constructor(id: string, email: string, firstName: string, lastName: string, shortIntro: string) {
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.shortIntro = shortIntro;
        this.photoUrl = 'https://www.timeshighereducation.com/sites/default/files/byline_photos/default-avatar.png';
        this.myCars = [];
        this.reviews = [];
        this.comments = [];
        this.rating = 0;
        this.voters = [];
        this.myMechanics = [];
        this.myFriends = [];
        this.myFollowers = [];
        this.offers = [];
        this.role = 'user';
        this.joinDate = new Date();
        this.isBanned = false;
    }
}
