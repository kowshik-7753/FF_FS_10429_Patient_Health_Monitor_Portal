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
  login(login) {
    return this.http.post("http://localhost:1234/phmp/login",login);
  }
  createprofile(profile) {
    return this.http.post("http://localhost:1234/phmp/profile",profile);
  }

  bmicalculator(bmi) {
    return this.http.post("http://localhost:1234/phmp/bmi",bmi);
  }

  getbmi(id) {
    return this.http.get("http://localhost:1234/phmp/getbmi",id);
  }
}
