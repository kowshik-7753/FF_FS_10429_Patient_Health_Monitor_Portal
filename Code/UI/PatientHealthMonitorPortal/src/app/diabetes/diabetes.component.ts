import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import {UserService} from '../user.service'
import { Diabetes } from '../model/diabetes.model';

@Component({
  selector: 'app-diabetes',
  templateUrl: './diabetes.component.html',
  styleUrls: ['./diabetes.component.css']
})
export class DiabetesComponent implements OnInit {
 patientdiabetes:any=new Diabetes();
  constructor(private service:UserService) { }
  formdata;
  ngOnInit(): void {
    this.formdata= new FormGroup({
      userid: new FormControl("",Validators.compose([Validators.required])),
      bmi:new FormControl("",Validators.compose([Validators.required])),
      bpsystolicValue:new FormControl("",Validators.compose([Validators.required])),
      bpdiastolicValue:new FormControl("",Validators.compose([Validators.required])),
      fastingGlucose:new FormControl("",Validators.compose([Validators.required])),
      hdlcholesterol:new FormControl("",Validators.compose([Validators.required])),
      serumTriglycerides:new FormControl("",Validators.compose([Validators.required]))
    });
  }
  persondata=[];
  total:Number;
  public submitted:boolean;
  onClickSubmit(data) {
  this.submitted=true;
  if(data.userid>0){
  this.patientdiabetes.userId=data.userid;
  this.patientdiabetes.bmi=data.bmi;
  this.patientdiabetes.bpsystolicValue=data.bpsystolicValue;
  this.patientdiabetes.bpdiastolicValue=data.bpdiastolicValue;
  this.patientdiabetes.fastingGlucose=data.fastingGlucose;
  this.patientdiabetes.hdlcholesterol=data.hdlcholesterol;
  this.patientdiabetes.serumTriglycerides=data.serumTriglycerides;
  this.total=((data.bmi+data.bpsystolicValue+data.bpdiastolicValue+data.fastingGlucose+data.hdlcholesterol+data.serumTriglycerides)/6);
  if(this.total>90)
   this.patientdiabetes.diabetesResult="very High";
  if(this.total>70 &&this.total<90)
    this.patientdiabetes.diabetesResult="High";
  if(this.total>50 &&this.total<70)
    this.patientdiabetes.diabetesResult="Medium";
  if(this.total<50)
    this.patientdiabetes.diabetesResult="Low";
 // console.log(this.patientdiabetes);  
  this.service.diabetes(this.patientdiabetes).subscribe((response) => {
    console.log(response);
    //console.log(this.patientdiabetes);
    //this.router.navigateByUrl("/home");
  }, (error) => {
    console.log(error);
    //this.msg = error.message;
  });
  this.service.getdiabetes(data.userid).subscribe((data1)=>{
    this.persondata=Array.from(Object.keys(data1),k=>data1[k]);
  });
}
  }
}
