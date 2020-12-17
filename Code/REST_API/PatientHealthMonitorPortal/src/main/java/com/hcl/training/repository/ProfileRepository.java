package com.hcl.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hcl.training.model.Profile;
import com.hcl.training.model.Users;

public interface ProfileRepository extends JpaRepository<Profile, Integer>{

}
