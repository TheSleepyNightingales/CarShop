import { element } from 'protractor';
import 'rxjs/add/operator/map';
import { AngularFireModule } from 'angularfire2';
import { Offer } from './../../shared/models/Offer';
import { CarServiceService } from './../car-service.service';
import { CarServiceOffersComponent } from './car-service-offers.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../shared/models/User';
import { Observable } from 'rxjs/Rx';

describe('CarServiceOffers component', () => {
    let component: CarServiceOffersComponent;
    let fixture: ComponentFixture<CarServiceOffersComponent>;
    let debugElement: DebugElement;
    let element: HTMLElement;

    const authServiceMock = {
        currentUser() {
            return {
                uid: '1',
                email: 'test@mail.com'
            };
        }
    };

    const serviceMock = {
        getOffers(id) {
            return Observable.of([new Offer('offer12', 'repair', date, date, 'sample'),
             new Offer('offer66', 'repair', date, date, 'sample')]);
        },
        getClients(id) {
            return Observable.of([]);
        }
    };

    const date = new Date();

    beforeEach(async() => {
        TestBed.configureTestingModule({
            imports: [AngularFireModule.initializeApp(environment.firebaseConfig)],
            declarations: [CarServiceOffersComponent],
            providers: [
                {provide: AuthService, useValue: authServiceMock},
                {provide: CarServiceService, useValue: serviceMock}
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CarServiceOffersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should list all offers of car service correctly', () => {
        debugElement = fixture.debugElement.query(By.css('.offer'));
        element = debugElement.nativeElement;
        expect(element.children.length).toEqual(2);
    });


});
