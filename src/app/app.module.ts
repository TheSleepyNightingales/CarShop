import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { HeaderComponent } from './shared/header/header.component';
import { AsideComponent } from './shared/aside/aside.component';
import { MainComponent } from './shared/main/main.component';

import { HomeComponent } from './home/home.component';
import { MechanicComponent } from './mechanic/mechanic.component';
import { UserComponent } from './user/user.component';

import { AppRoutingModule } from './app-routing.module';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    MechanicComponent,
    UserComponent,
    HeaderComponent,
    AsideComponent,
    MainComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [AngularFireAuth, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
