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
  id:number;
  ngOnInit(): void {
    this.id=JSON.parse(localStorage.getItem("id"));
    this.formdata= new FormGroup({
      userid: new FormControl(this.id,Validators.compose([Validators.required])),
      bmi:new FormControl("",Validators.compose([Validators.required])),
      bpsystolicValue:new FormControl("",Validators.compose([Validators.required])),
      bpdiastolicValue:new FormControl("",Validators.compose([Validators.required])),
      fastingGlucose:new FormControl("",Validators.compose([Validators.required])),
      hdlcholesterol:new FormControl("",Validators.compose([Validators.required])),
      serumTriglycerides:new FormControl("",Validators.compose([Validators.required]))
    });
  }
  persondata=[];
  total:number;
  public submitted:boolean;
  onClickSubmit(data) {
  this.submitted=true;
  //if(data.userid>0)
  if(this.formdata.invalid)
  return ;
  this.patientdiabetes.userId=data.userid;
  this.patientdiabetes.bmi=data.bmi;
  this.patientdiabetes.bpsystolicValue=data.bpsystolicValue;
  this.patientdiabetes.bpdiastolicValue=data.bpdiastolicValue;
  this.patientdiabetes.fastingGlucose=data.fastingGlucose;
  this.patientdiabetes.hdlCholesterol=data.hdlcholesterol;
  this.patientdiabetes.serumTriglycerides=data.serumTriglycerides;
  this.total=((parseInt(this.patientdiabetes.bmi)+parseInt(this.patientdiabetes.bpsystolicValue)+parseInt(this.patientdiabetes.bpdiastolicValue)+
  parseInt(this.patientdiabetes.fastingGlucose)+parseInt(this.patientdiabetes.hdlCholesterol)+parseInt(this.patientdiabetes.serumTriglycerides))/6);
  console.log(this.total);
  //console.log(((data.bmi+data.bpsystolicValue+data.bpdiastolicValue+data.fastingGlucose+data.hdlcholesterol+data.serumTriglycerides)/6));
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
