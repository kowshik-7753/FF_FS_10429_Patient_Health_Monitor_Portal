package com.hcl.training.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

/**
 * @author kowshik.kotha
 *
 */
@Setter
@Getter
@Entity
@Table(name="Users")
public class Users {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userId;
	private String password;
	private String firstName;
	private String lastName;
	private int age;
	private String gender;
	private String contactNumber;
	private String email;
	private String address;
	private int zipCode;
	private String city;


}
