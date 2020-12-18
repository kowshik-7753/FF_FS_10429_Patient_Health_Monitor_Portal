import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
name=String;
  ngOnInit(): void {
   // this.name=JSON.parse(localStorage.getItem("name"));
  }

}
