import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import {UserService} from '../user.service'
import { Router } from '@angular/router';

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
      pipCode:new FormControl("",Validators.compose([Validators.required])),
      city:new FormControl("",Validators.compose([Validators.required])),
      country:new FormControl("",Validators.compose([Validators.required])),
      gaurdianLastName: new FormControl("",Validators.compose([Validators.required])),
      gaurdianFirstName:new FormControl("",Validators.compose([Validators.required])),
    });
  }
onClickSubmit(data) {
  var profile:any=new profile();
  profile.lastName=data.lastname;
  profile.firstName=data.firstname;
  profile.password=data.password;
  profile.age=data.age;
  profile.gender=data.gender;
  profile.emailId=data.emailid;
  profile.pinCode=data.pinCode;
  profile.city=data.city;
  this.service.createprofile(profile).subscribe((response) => {
    console.log(response);
    this.router.navigateByUrl("/home");
  }, (error) => {
    console.log(error);
    //this.msg = error.message;
  });
}
}
