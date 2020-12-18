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
id:number;
  ngOnInit(): void {
    this.id=JSON.parse(localStorage.getItem("id"));
    this.formdata= new FormGroup({
      userid:new FormControl(this.id,Validators.compose([Validators.required])),
      weight:new FormControl("",Validators.compose([Validators.required])),
      height:new FormControl("",Validators.compose([Validators.required])),
      date:new FormControl("")
    })
  }
  //bmi:bmi;
 

  public persondata:any[];
  submitted:boolean;
  onClickSubmit(data) {
    this.submitted=true;
    if(data.userid>0){
    var patientbmi:any=new bmi();
    patientbmi.userId=data.userid;
    patientbmi.weight=data.weight;
    patientbmi.height=data.height;
    patientbmi.date=data.date;
    patientbmi.bmi=(data.weight)/((data.height)*(data.height));
    this.service.bmicalculator(patientbmi).subscribe((response) => {
      console.log(response);
      console.log(patientbmi);
      //this.router.navigateByUrl("/home");
    }, (error) => {
      console.log(error);
      //this.msg = error.message;
    });
    this.service.getbmi(data.userid).subscribe((data1)=>{
      this.persondata=Array.from(Object.keys(data1),k=>data1[k]);
    });
  }
  }

}
