package com.hcl.training.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hcl.training.model.Bmi;


@Repository
public interface BmiRepository extends JpaRepository<Bmi, Integer>{
	 @Query("select p from Bmi p where p.userId=?1")
	    List<Bmi> findByUserId(int id);
}
