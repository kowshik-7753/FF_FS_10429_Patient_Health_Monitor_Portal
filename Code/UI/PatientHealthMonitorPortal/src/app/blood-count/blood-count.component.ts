import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blood-count',
  templateUrl: './blood-count.component.html',
  styleUrls: ['./blood-count.component.css']
})
export class BloodCountComponent implements OnInit {
public persondata=[];
  constructor() { }

  ngOnInit(): void {
  }

}
