package com.hcl.training.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hcl.training.model.Diabetes;

@Repository
public interface DiabetesRepository extends JpaRepository<Diabetes,Integer>{
	 @Query("select p from Diabetes p where p.userId=?1")
	    List<Diabetes> findByUserId(int id);
}
