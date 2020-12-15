import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ RegistrationComponent } from './registration/registration.component';
import{ LoginComponent } from './login/login.component';
import{ ProfileComponent } from './profile/profile.component';
import{ HomeComponent } from './home/home.component';
import{BmiCalculatorComponent}from'./bmi-calculator/bmi-calculator.component';
import{BloodCountComponent}from'./blood-count/blood-count.component';


const routes: Routes = [{path:"register",component:RegistrationComponent},
{path:"login",component:LoginComponent},
{path:"profile",component:ProfileComponent},
{path:"home",component:HomeComponent},
{path:"bmi",component:BmiCalculatorComponent},
{path:"bloodcount",component:BloodCountComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [RegistrationComponent,LoginComponent,ProfileComponent,HomeComponent,BmiCalculatorComponent,BloodCountComponent];
