CREATE DATABASE parcial2_A01244940;

USE parcial2_A01244940;

CREATE TABLE Alumnos (

     Id INT NOT NULL AUTO_INCREMENT,
     Nombre CHAR(150) NOT NULL,
     Identificador CHAR(15) NOT NULL,
     Email CHAR(80),
     Carrera CHAR(50),
     PRIMARY KEY (id)

);

SELECT * FROM Alumnos;

TRUNCATE Alumnos;
