import { User } from "./User";
import { Mechanic } from "./Mechanic";

export class CarService {
    id: string;
    email: string;

    owner: string;

    licenseNumber: string;

    address: string;

    photoUrl: string;

    role: string;

    activities: string;

    reviews: Array<any>;

    comments: Array<any>;

    rating: number;

    myMechanics: Array<Mechanic>;

    myClients: Array<User>;

    joinDate: Date;

    isDeleted: boolean;

    constructor(id: string, email: string, owner: string, licenseNumber: string, address: string, activities: string) {
        this.id = id;
        this.email = email;
        this.owner = owner;
        this.licenseNumber = licenseNumber;
        this.address = address;
        this.photoUrl = 'https://www.timeshighereducation.com/sites/default/files/byline_photos/default-avatar.png';
        this.reviews = [];
        this.comments = [];
        this.rating = 0;
        this.myMechanics = [];
        this.myClients = [];
        this.role = 'service';
        this.joinDate = new Date();
        this.isDeleted = false;
    }
}
