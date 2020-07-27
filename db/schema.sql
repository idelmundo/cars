-- Drops the cars_db if it already exists --
DROP DATABASE IF EXISTS cars_db;

-- Create the database cars_db and specified it for use.
CREATE DATABASE cars_db;

USE cars_db;

-- Create the table cars.
CREATE TABLE cars (
  id int NOT NULL AUTO_INCREMENT,
  car_name varchar(255) NOT NULL,
  sell boolean DEFAULT FALSE ,
  createdAt TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
);

