package com.hcl.training.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.training.model.Bloodcount;
import com.hcl.training.model.Bmi;
import com.hcl.training.model.Diabetes;
import com.hcl.training.model.Profile;
import com.hcl.training.model.Users;
import com.hcl.training.service.PatientServiceinf;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/phmp")
public class HomeController {
	@Autowired
	PatientServiceinf patientService;
	@PostMapping("/register")
	public @ResponseBody String saveData(@RequestBody Users user) {
			patientService.saveData(user);
			return "{\"msg\":\"Added\"}";
	}
	@PostMapping("/profile")
	public @ResponseBody String profile(@RequestBody Profile profile) {
		patientService.profile(profile);
     	   return "{\"msg\":\"sucess\"}";

    }
	@PostMapping("/bmi")
	public @ResponseBody String bmi(@RequestBody Bmi bmi) {
		patientService.patientbmi(bmi);
     	   return "{\"msg\":\"sucess\"}";

    }
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(value="/login/{id}")
	 public List<Users> logingetdata(@PathVariable("id") int id){
	     List<Users> ls=patientService.getLoginData(id);
	     return ls;
	 }
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(value="/getbmi/{id}")
	 public List<Bmi> bmigetdata(@PathVariable("id") int id){
	     List<Bmi> ls=patientService.getBmiData(id);
	     return ls;
	 }
	@PostMapping("/bloodcount")
	public @ResponseBody String bloodcount(@RequestBody Bloodcount bloodcount) {
		patientService.bloodcount(bloodcount);
     	   return "{\"msg\":\"sucess\"}";

    }
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(value="/getbloodcount/{id}")
	 public List<Bloodcount> bloodcountgetdata(@PathVariable("id") int id){
	     List<Bloodcount> ls=patientService.getBloodcountData(id);
	     return ls;
	 }
	@PostMapping("/diabetes")
	public @ResponseBody String diabetes(@RequestBody Diabetes diabetes) {
		patientService.diabetes(diabetes);
	//	System.out.println(diabetes.getBPDiastolicValue()+""+diabetes.getBPSystolicValue());
     	   return "{\"msg\":\"sucess\"}";

    }
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(value="/getdiabetes/{id}")
	 public List<Diabetes> diabetesgetdata(@PathVariable("id") int id){
	     List<Diabetes> ls=patientService.getdiabetesData(id);
	     return ls;
	 }
	
}
