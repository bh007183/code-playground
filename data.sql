DROP DATABASE IF EXISTS birds_db;

CREATE DATABASE birds_db;

USE birds_db;

CREATE TABLE birds (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR (30) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO birds (name) VALUES ("turkey")

