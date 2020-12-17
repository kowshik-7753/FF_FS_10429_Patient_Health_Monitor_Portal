import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';//component related routing.
import { UserService } from '../user.service'
import { users } from '../model/users.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router, private service: UserService) { }
  formdata;
  ngOnInit(): void {
    this.formdata = new FormGroup({
      lastname: new FormControl("", Validators.compose([Validators.required])),
      firstname: new FormControl("", Validators.compose([Validators.required])),
      password: new FormControl("", Validators.compose([Validators.required])),
      age: new FormControl("", Validators.compose([Validators.required])),
      gender: new FormControl("", Validators.compose([Validators.required])),
      emailid: new FormControl("", Validators.compose([Validators.required])),
      contactNumber: new FormControl("", Validators.compose([Validators.required])),
      address: new FormControl("", Validators.compose([Validators.required])),
      zipCode: new FormControl("", Validators.compose([Validators.required])),
      city: new FormControl("", Validators.compose([Validators.required]))
    });
  }
  //user:users;
  submitted: boolean;
  onClickSubmit(data) {
    this.submitted = true;
    if (this.formdata.invalid)
      return ;
    var user: any = new users();
    user.lastName = data.lastname;
    user.firstName = data.firstname;
    user.password = data.password;
    user.age = data.age;
    user.gender = data.gender;
    user.email = data.emailid;
    user.contactNumber = data.contactNumber;
    user.address = data.address;
    user.zipCode = data.zipCode;
    user.city = data.city;
    this.service.createPatient(user).subscribe((response) => {
      console.log(response);
      this.router.navigateByUrl("/login");
    }, (error) => {
      console.log(error);
      //this.msg = error.message;
    });
  }
}


