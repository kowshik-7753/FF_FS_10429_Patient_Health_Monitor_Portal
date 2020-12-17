package com.hcl.training.service;



import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hcl.training.model.Bloodcount;
import com.hcl.training.model.Bmi;
import com.hcl.training.model.Diabetes;
import com.hcl.training.model.Profile;
import com.hcl.training.model.Users;
import com.hcl.training.repository.BloodcountRepository;
import com.hcl.training.repository.BmiRepository;
import com.hcl.training.repository.DiabetesRepository;
import com.hcl.training.repository.ProfileRepository;
import com.hcl.training.repository.UsersRepository;

@Transactional
@Service
public class PatientService implements PatientServiceinf{
@Autowired
UsersRepository userRepository;
@Autowired
ProfileRepository profileRepository;
@Autowired
BmiRepository bmiRepository;
@Autowired
BloodcountRepository bloodcountRepository;
@Autowired
DiabetesRepository diabetesRepository;

	@Override
	public void saveData(Users user) {
		userRepository.save(user);
		
	}
	@Override
	public void profile(Profile profile) {
		  profileRepository.save(profile);
		
	}
	@Override
	public void patientbmi(Bmi bmi) {
		bmiRepository.save(bmi);
	}
	@Override
	 public List<Users> getLoginData(int id) {
        List<Users> ls=userRepository.findByUserId(id);
        return ls;
    }
	@Override
	public List<Bmi> getBmiData(int id) {
		List<Bmi> ls=bmiRepository.findByUserId(id);
        return ls;
	}
	@Override
	public void bloodcount(Bloodcount bloodcount) {
		bloodcountRepository.save(bloodcount);
		
	}
	@Override
	public List<Bloodcount> getBloodcountData(int id) {
		List<Bloodcount> ls=bloodcountRepository.findByUserId(id);
        return ls;
	}
	@Override
	public void diabetes(Diabetes diabetes) {
		diabetesRepository.save(diabetes);
		
	}
	@Override
	public List<Diabetes> getdiabetesData(int id) {
		List<Diabetes> ls=diabetesRepository.findByUserId(id);
        return ls;
	}

}
