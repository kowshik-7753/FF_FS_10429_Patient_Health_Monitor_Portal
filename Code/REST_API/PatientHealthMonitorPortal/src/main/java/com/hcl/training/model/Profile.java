package com.hcl.training.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
 
@Setter
@Getter
@Entity
@Table(name="profile")
public class Profile {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int userId;
	private String password;
	private String dateOfBirth;
	private String emailId;
	private String contactNumber;
	private String address;
	private String city;
	private String country;
	private int pinCode;
	private String gender;
	private String guardianFirstName;
	private String guardianLastName;
}
