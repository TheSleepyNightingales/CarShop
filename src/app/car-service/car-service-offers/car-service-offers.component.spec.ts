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
    let spy;

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
            return Observable.of([new Offer('new offer', 'repair', date, date, 'sample content')]);
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
        expect(element.children.length).toEqual(1);
    });

    it('should list name of offer correctly', () => {
        debugElement = fixture.debugElement.query(By.css('.card'));
        element = debugElement.nativeElement;
        expect(element.textContent).toContain('new offer');
    });

    it('should list category of offer correctly', () => {
        debugElement = fixture.debugElement.query(By.css('.card'));
        element = debugElement.nativeElement;
        expect(element.textContent).toContain('repair');
    });

    it('should list startDate and endDate of offer correctly', () => {
        debugElement = fixture.debugElement.query(By.css('.card'));
        element = debugElement.nativeElement;
        expect(element.textContent).toContain('11');
        expect(element.textContent).toContain('Sep');
        expect(element.textContent).toContain('2017');
    });

    it('should list content of offer correctly', () => {
        debugElement = fixture.debugElement.query(By.css('.card'));
        element = debugElement.nativeElement;
        expect(element.textContent).toContain('sample content');
    });
});
