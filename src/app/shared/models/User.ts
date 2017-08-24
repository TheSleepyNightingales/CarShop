import { Car } from './Car';
import { Mechanic } from './Mechanic';

const getNextId = (function() {
    let counter = 0;
    return function() {
        counter += 1;
        return counter;
    };
})();

export class User {
    id: number;
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

    myMechanics: Array<Mechanic>;

    myFriends: Array<User>;

    myFollowers: Array<User>;

    joinDate: Date;

    isBanned: boolean;

    constructor(email: string, firstName: string, lastName: string, shortIntro: string) {
        this.id = getNextId();
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.shortIntro = shortIntro;
        this.photoUrl = 'https://www.timeshighereducation.com/sites/default/files/byline_photos/default-avatar.png';
        this.myCars = [];
        this.reviews = [];
        this.comments = [];
        this.rating = 0;
        this.myMechanics = [];
        this.myFriends = [];
        this.myFollowers = [];
        this.role = 'user';
        this.joinDate = new Date();
        this.isBanned = false;
    }
}
