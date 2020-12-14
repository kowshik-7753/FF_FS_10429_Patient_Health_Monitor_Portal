########################START Script #######################
#												    	   #                                                 #
#Topic :SQL.                                               #
#autor :kotha kowshik.                                     #
#This Script contains the database Patient_health_monitor  #
#It contains two tables users,patient_profile,patientBMI   #
#Blood_count,Diabaties.                                    #												           #
#######################End Script ##########################

/* creating database for patient_health_moniter*/
create database patient_health_moniter;
/*using database patient_health_moniter*/
use patient_health_moniter;

/*creating a table users with the required fields*/
CREATE TABLE Users(
id int primary key ,
loginID varchar(20)not null unique,
password varchar(20),
firstName varchar(20) NOT NULL,
lastName varchar(20) NOT NULL,
age int NOT NULL,
gender varchar(6) NOT NULL,
contactNumber varchar(13) NOT NULL,
email varchar(30) NOT NULL UNIQUE,
address varchar(30) NOT NULL,
zipCode integer,
city varchar(15) NOT NULL
);

/* creating a table patient_profile */
CREATE TABLE Patient_profile(
userName VARCHAR(20),
password VARCHAR(20) NOT NULL,
dateOfBirth DATE NOT NULL,
email VARCHAR(25) NOT NULL UNIQUE ,
contactNumber VARCHAR(13) NOT NULL,
address VARCHAR(20) NOT NULL,
city VARCHAR(15) NOT NULL,
country VARCHAR(20) NOT NULL,
pinCode INTEGER NOT NULL,
gender VARCHAR(6) NOT NULL,
guardian_FirstName VARCHAR(20) NOT NULL,
guardian_LastName VARCHAR(20) NOT NULL,
PRIMARY KEY (userName),
FOREIGN KEY(userName) REFERENCES Users(loginID)
);

/* craeting  a table patientBMI */
CREATE TABLE PatientBMI(
patientID VARCHAR(20) NOT NULL,
height FLOAT NOT NULL,
weight FLOAT NOT NULL,
BMI FLOAT NOT NULL,
currentDate DATE NOT NULL,
FOREIGN KEY(patientID) REFERENCES Users(loginID)
);

/* creating table Blood_count*/
CREATE TABLE Blood_Count(
patientID VARCHAR(20) NOT NULL,
RBC INTEGER NOT NULL,
WBC INTEGER NOT NULL,
Platelet INTEGER NOT NULL,
FOREIGN KEY(patientID) REFERENCES Users(loginID)
);


/* creating table for Diabetes*/
CREATE TABLE Diabetes(
patientID VARCHAR(20) NOT NULL,
BMI FLOAT NOT NULL,
BPSystolicValue FLOAT NOT NULL,
BPDiastolicValue FLOAT NOT NULL,
FastingGlucose FLOAT NOT NULL,
HDLCholesterol FLOAT NOT NULL,
SerumTriglycerides FLOAT NOT NULL,
RiskofDiabetes FLOAT NOT NULL,
FOREIGN KEY(patientID) REFERENCES Users(loginID)
);

