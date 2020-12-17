import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import {UserService} from '../user.service'
import { Router } from '@angular/router';
import { profile} from '../model/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service:UserService,private router:Router) { }
formdata;
  ngOnInit(): void {
    this.formdata= new FormGroup({
      userId:new FormControl("",Validators.compose([Validators.required])),
      password:new FormControl("",Validators.compose([Validators.required])),
      age:new FormControl("",Validators.compose([Validators.required])),
      gender:new FormControl("",Validators.compose([Validators.required])),
      emailid:new FormControl("",Validators.compose([Validators.required])),
      pinCode:new FormControl("",Validators.compose([Validators.required])),
      city:new FormControl("",Validators.compose([Validators.required])),
      country:new FormControl("",Validators.compose([Validators.required])),
      contactNumber:new FormControl("",Validators.compose([Validators.required])),
      gaurdianLastName: new FormControl("",Validators.compose([Validators.required])),
      gaurdianFirstName:new FormControl("",Validators.compose([Validators.required])),
    });
  }
 public submitted:boolean;
onClickSubmit(data) {
  this.submitted=true;
  if(data.age>18){
  var profile1:any=new profile();
  profile1.userId=data.userId
  profile1.gaurdianLastName=data.lastname;
  profile1.gaurdianFirstName=data.firstname;
  profile1.password=data.password;
  profile1.age=data.age;
  profile1.gender=data.gender;
  profile1.email=data.emailid;
  profile1.pinCode=data.pinCode;
  profile1.city=data.city;
  profile1.country=data.country;
  profile1.contactNumber=data.contactNumber;
  this.service.createprofile(profile1).subscribe((response) => {
    console.log(response);
    this.router.navigateByUrl("/home");
  }, (error) => {
    console.log(error);
    //this.msg = error.message;
  });
}
}
}
