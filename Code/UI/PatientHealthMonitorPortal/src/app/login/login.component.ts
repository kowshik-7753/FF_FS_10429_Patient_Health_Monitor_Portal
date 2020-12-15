import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';//component related routing.
import {UserService} from '../user.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private service:UserService) { }
formdata;
  ngOnInit(): void {
    this.formdata= new FormGroup({
      userid:new FormControl("",Validators.compose([Validators.required])),
      password:new FormControl("",Validators.compose([Validators.required]))
    })
  }
  submitted:boolean;
  onClickSubmit(data) {
    this.submitted=true;
    if(data.userid=="1"&&data.password=="123456") {
      var login:any=new login();
      login.userId=data.userid;
      login.password=data.password;
      this.service.login(login).subscribe((response) => {
        console.log(response);
        this.router.navigateByUrl("/home");
      }, (error) => {
        console.log(error);
        //this.msg = error.message;
      });
//this.router.navigateByUrl("/home");
  }
  }

}
