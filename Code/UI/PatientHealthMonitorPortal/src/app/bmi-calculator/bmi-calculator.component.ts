import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';//component related routing.
import {UserService} from '../user.service'
import { bmi } from '../model/bmi.model';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent implements OnInit {

  constructor(private router:Router,private service:UserService) { }
formdata;
  ngOnInit(): void {
    this.formdata= new FormGroup({
      userid:new FormControl("",Validators.compose([Validators.required])),
      weight:new FormControl("",Validators.compose([Validators.required])),
      height:new FormControl("",Validators.compose([Validators.required]))
    })
  }
  //bmi:bmi;
  public persondata=[]
  submitted:boolean;
  onClickSubmit(data) {
    this.submitted=true;
    if(data.userid>0&&data.weight>0&&data.height>0) {
    var bmi:any=new bmi();
    bmi.userId=data.userid;
    bmi.weight=data.weight;
    bmi.height=data.height;
    bmi.date=data.date;
    this.service.bmicalculator(bmi).subscribe((response) => {
      console.log(response);
      //this.router.navigateByUrl("/home");
    }, (error) => {
      console.log(error);
      //this.msg = error.message;
    });
    this.service.getbmi(data.userId).subscribe((data1)=>{
      this.persondata=Array.from(Object.keys(data1),k=>data1[k]);
    });
  }
  }

}
