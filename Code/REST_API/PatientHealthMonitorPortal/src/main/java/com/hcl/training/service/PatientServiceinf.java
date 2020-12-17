package com.hcl.training.service;

import java.util.List;

import com.hcl.training.model.Bloodcount;
import com.hcl.training.model.Bmi;
import com.hcl.training.model.Diabetes;
import com.hcl.training.model.Profile;
import com.hcl.training.model.Users;

public interface PatientServiceinf {

	void saveData(Users user);

	void profile(Profile profile);

	void patientbmi(Bmi bmi);

	List<Users> getLoginData(int id);

	List<Bmi> getBmiData(int id);

	void bloodcount(Bloodcount bloodcount);

	List<Bloodcount> getBloodcountData(int id);

	void diabetes(Diabetes diabetes);

	List<Diabetes> getdiabetesData(int id);

}
