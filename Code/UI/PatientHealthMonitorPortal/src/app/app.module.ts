import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from'@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { BloodCountComponent } from './blood-count/blood-count.component';
import { DiabetesComponent } from './diabetes/diabetes.component';
import {HttpClientModule} from '@angular/common/http';
import { BulkComponent } from './bulk/bulk.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    BmiCalculatorComponent,
    BloodCountComponent,
    DiabetesComponent,
    BulkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
