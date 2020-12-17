package com.hcl.training.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hcl.training.model.Users;


@Repository
public interface UsersRepository extends JpaRepository<Users, Integer> {
	 @Query("select p from Users p where p.userId=?1")
	    List<Users> findByUserId(int id);

	 
}
