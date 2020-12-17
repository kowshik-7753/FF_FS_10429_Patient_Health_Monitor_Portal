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
@Table(name="bmi")
public class Bmi {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
public int id;
private int userId;
private float height;
private float weight;
private float bmi;
private String date;
}
