import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';//component related routing.
import {UserService} from '../user.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router:Router,private service:UserService) { }
  formdata;
  ngOnInit(): void {
    this.formdata= new FormGroup({
      lastname: new FormControl("",Validators.compose([Validators.required])),
      firstname:new FormControl("",Validators.compose([Validators.required])),
      password:new FormControl("",Validators.compose([Validators.required])),
      age:new FormControl("",Validators.compose([Validators.required])),
      gender:new FormControl("",Validators.compose([Validators.required])),
      emailid:new FormControl("",Validators.compose([Validators.required])),
      zipCode:new FormControl("",Validators.compose([Validators.required])),
      city:new FormControl("",Validators.compose([Validators.required]))
    });
  }
submitted:boolean;
  onClickSubmit(data) {
    this.submitted=true;
    if(data.lastname.lenght>0) {
      var users:any=new users();
      users.lastName=data.lastname;
      users.firstName=data.firstname;
      users.password=data.password;
      users.age=data.age;
      users.gender=data.gender;
      users.emailId=data.emailid;
      users.zipCode=data.zipCode;
      users.city=data.city;
      this.service.createPatient(users).subscribe((response) => {
        console.log(response);
        this.router.navigateByUrl("/login");
      }, (error) => {
        console.log(error);
        //this.msg = error.message;
      });
    }
  }

}
