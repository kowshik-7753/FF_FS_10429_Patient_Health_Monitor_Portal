import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  createPatient(users) {
    return this.http.post("http://localhost:1234/phmp/register",users);

  }
  createprofile(profile) {
    return this.http.post("http://localhost:1234/phmp/profile",profile);
  }

  bmicalculator(bmi) {
    return this.http.post("http://localhost:1234/phmp/bmi",bmi);
  }

  getbmi(id:number) {
    return this.http.get("http://localhost:1234/phmp/getbmi/"+id);
  }
  getloginlist(id:number) {
    return this.http.get("http://localhost:1234/phmp/login/"+id);
  }
  bloodcount(patientbloodcount){
    return this.http.post("http://localhost:1234/phmp/bloodcount",patientbloodcount);
  }
  getbloodcount(id:number) {
    return this.http.get("http://localhost:1234/phmp/getbloodcount/"+id);
  }
  diabetes(patientdiabetes:any){
    //console.log(patientdiabetes);
    return this.http.post("http://localhost:1234/phmp/diabetes",patientdiabetes);
  }
  getdiabetes(id:number) {
    return this.http.get("http://localhost:1234/phmp/getdiabetes/"+id);
  }
}
