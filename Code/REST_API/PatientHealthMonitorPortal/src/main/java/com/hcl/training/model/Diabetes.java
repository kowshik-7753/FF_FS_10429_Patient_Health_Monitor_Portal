package com.hcl.training.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="diabetes")
public class Diabetes {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int userId;
	private float bmi;
	private float bpSystolicValue;//bPSystolicValue
	private float bpDiastolicValue;
	private float fastingGlucose;
	private float hdlCholesterol;
	private float serumTriglycerides;
	private String diabetesResult;

}
