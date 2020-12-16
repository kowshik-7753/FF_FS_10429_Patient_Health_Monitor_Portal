import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';//component related routing.
import {UserService} from '../user.service'
import { login } from '../model/login.model';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private service:UserService) { }
formdata;
msg="";
  ngOnInit(): void {
    this.formdata= new FormGroup({
      userid:new FormControl("",Validators.compose([Validators.required])),
      password:new FormControl("",Validators.compose([Validators.required]))
    })
  }
  //loin:login;
  id;
  password1;
  listdata=[];
  submitted:boolean;
  onClickSubmit(data) {
    this.submitted=true;
    this.id=data.userid;
    this.password1=data.password;
      this.service.getloginlist(this.id).subscribe((data) => {
        this.listdata = Array.from(Object.keys(data), k=>data[k]);
    if(this.listdata[0].password==this.password1 )
      this.router.navigate(["/home"]);
    else
    this.msg="Invalid credentilas";
  })
}

}
