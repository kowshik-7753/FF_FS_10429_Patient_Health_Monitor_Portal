package com.hcl.training.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hcl.training.model.Bloodcount;

@Repository
public interface BloodcountRepository extends JpaRepository<Bloodcount, Integer> {
	 @Query("select p from Bloodcount p where p.userId=?1")
	    List<Bloodcount> findByUserId(int id);
}
