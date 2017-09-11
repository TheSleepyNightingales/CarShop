import 'rxjs/add/operator/map';
import { AngularFireModule } from 'angularfire2';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../shared/models/User';
import { Observable } from 'rxjs/Rx';
import {UsersListComponent} from './users-list.component';
import {UserServicePubService} from '../user-service-pub.service';
import { RouterTestingModule } from '@angular/router/testing';


describe('UserList component', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;
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
    getAllUsers() {
      return Observable.of([new User('1', 'g@gmail.com' , 'Gosho', 'Penev', 'ludiq')]);
    }
  };

  const date = new Date();

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [UsersListComponent],
    });
    TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(environment.firebaseConfig)],
      declarations: [UsersListComponent],
      providers: [
        {provide: AuthService, useValue: authServiceMock},
        {provide: UserServicePubService, useValue: serviceMock}
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list all users from db correctly', () => {
    console.log(fixture.debugElement.query(By.css('.card')));
    debugElement = fixture.debugElement.query(By.css('.card'));
    element = debugElement.nativeElement;
    console.log(element.classList);
    expect(element.classList.length / 2).toEqual(1);
    console.log(component.users.count());
  });


});
