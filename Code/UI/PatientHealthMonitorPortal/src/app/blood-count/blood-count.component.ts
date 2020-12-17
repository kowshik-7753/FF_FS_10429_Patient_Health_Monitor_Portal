import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import {UserService} from '../user.service'
import { bloodcount } from '../model/bloodcount.model';

@Component({
  selector: 'app-blood-count',
  templateUrl: './blood-count.component.html',
  styleUrls: ['./blood-count.component.css']
})
export class BloodCountComponent implements OnInit {
public persondata=[];
  constructor(private service:UserService) { }
  formdata;
  ngOnInit(): void {
    this.formdata= new FormGroup({
      userid:new FormControl("",Validators.compose([Validators.required])),
      rbc:new FormControl("",Validators.compose([Validators.required])),
      wbc:new FormControl("",Validators.compose([Validators.required])),
      platelet:new FormControl("",Validators.compose([Validators.required])),
      date:new FormControl("")
    })
  }

  public submitted:boolean;
onClickSubmit(data) {
  this.submitted=true;
  if(data.userid>0){
  var patientbloodcount:any=new bloodcount();
    patientbloodcount.userId=data.userid;
    patientbloodcount.rbc=data.rbc;
    patientbloodcount.wbc=data.wbc;
    patientbloodcount.date=data.date;
    patientbloodcount.platelet=data.platelet;
    this.service.bloodcount(patientbloodcount).subscribe((response) => {
      console.log(response);
      //this.router.navigateByUrl("/home");
    }, (error) => {
      console.log(error);
      //this.msg = error.message;
    });
    this.service.getbloodcount(data.userid).subscribe((data1)=>{
      this.persondata=Array.from(Object.keys(data1),k=>data1[k]);
    });
  }
}
}
