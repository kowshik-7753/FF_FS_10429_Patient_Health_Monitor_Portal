import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import {UserService} from '../user.service'

@Component({
  selector: 'app-bulk',
  templateUrl: './bulk.component.html',
  styleUrls: ['./bulk.component.css']
})
export class BulkComponent implements OnInit {

  constructor(private service:UserService) { }
formdata;
  ngOnInit(): void {
    this.formdata= new FormGroup({
      userid: new FormControl("",Validators.compose([Validators.required])),
      rbc:new FormControl("",Validators.compose([Validators.required])),
      wbc:new FormControl("",Validators.compose([Validators.required])),
      platelet:new FormControl("",Validators.compose([Validators.required])),
      bmi:new FormControl("",Validators.compose([Validators.required])),
      bpsystolicValue:new FormControl("",Validators.compose([Validators.required])),
      bpdiastolicValue:new FormControl("",Validators.compose([Validators.required])),
      fastingGlucose:new FormControl("",Validators.compose([Validators.required])),
      hdlcholesterol:new FormControl("",Validators.compose([Validators.required])),
      serumTriglycerides:new FormControl("",Validators.compose([Validators.required]))
    });
  }
  submitted:boolean;
  onClickSubmit(data){
    this.submitted=true;
  }

}
