-- Drops the day_planner_db if it already exists --
DROP DATABASE IF EXISTS cars_db;

-- Create the database day_planner_db and specified it for use.
CREATE DATABASE cars_db;

USE cars_db;

-- Create the table plans.
CREATE TABLE cars (
  id int NOT NULL AUTO_INCREMENT,
  car_name varchar(255) NOT NULL,
  devoured boolean NOT NULL
  PRIMARY KEY (id)
);

