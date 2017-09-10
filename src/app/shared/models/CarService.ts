import { User } from './User';
import { Mechanic } from './Mechanic';
import { Offer } from './Offer';

export class CarService {
    id: string;
    email: string;

    name: string;

    owner: string;

    licenseNumber: string;

    address: string;

    photoUrl: string;

    role: string;

    activities: string;

    reviews: Array<any>;

    comments: Array<any>;

    rating: number;

    voters: Array<any>;

    myMechanics: Array<Mechanic>;

    myClients: Array<User>;

    myRepairs: Array<any>;

    gallery: Array<any>;

    myOffers: Array<Offer>;
    joinDate: Date;

    isDeleted: boolean;

    constructor(id: string, email: string, name: string, owner: string, licenseNumber: string, address: string, activities: string) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.owner = owner;
        this.licenseNumber = licenseNumber;
        this.address = address;
        this.activities = activities;
        this.photoUrl = 'https://www.timeshighereducation.com/sites/default/files/byline_photos/default-avatar.png';
        this.reviews = [];
        this.comments = [];
        this.rating = 0;
        this.voters = [];
        this.myMechanics = [];
        this.myClients = [];
        this.myRepairs = [];
        this.gallery = [];
        this.role = 'service';
        this.joinDate = new Date();
        this.isDeleted = false;
    }
}
