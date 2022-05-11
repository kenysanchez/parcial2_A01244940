const express = require ("express");
const app = express();
const mysql = require("mysql");

app.use(express.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "cuquito",
    database: "parcial2_A01244940",
    port: 3307
});

connection.connect((err) => {
    if (err) throw err; 
    console.log("_____Connected to database_____");

    //INSERT 
    connection.query("INSERT Alumnos(Nombre, Identificador, Email, Carrera) VALUES( 'Kenia Sanchez', 'A01244940', 'A01244940@tec.mx', 'ISD'),( 'Sebastian Martinez', 'A01232474', 'A012324740@tec.mx', 'ISD') ", function (err, result, fields) {
        if (err) throw err;
        console.log("_____Se insertan registros_____")
        console.log(result);
      });
    //CONSULT 
    connection.query("SELECT * FROM Alumnos", function (err, result, fields) {
        if (err) throw err;
        console.log("_____Se consultan registros insertados_____")
        console.log(result);
      });

    //ACTUALIZAR
    connection.query("UPDATE Alumnos SET Nombre = 'BORRAR ALUMNO' WHERE Id = 2", function (err, result, fields) {
        if (err) throw err;
        console.log("_____Se actualizan registros insertados_____")
        console.log(result);
      });
    //CONSULTAR 
    connection.query("SELECT * FROM Alumnos", function (err, result, fields) {
        if (err) throw err;
        console.log("_____Se consultan registros actualizados_____")
        console.log(result);
      });


    //ELIMINAR
    connection.query("DELETE FROM Alumnos WHERE Id = 2", function (err, result, fields) {
        if (err) throw err;
        console.log("_____Se elimina segundo registro_____")
        console.log(result);
      });
    //CONSULTAR
    connection.query("SELECT * FROM Alumnos", function (err, result, fields) {
        if (err) throw err;
        console.log("_____Se consultan registros restantes_____")
        console.log(result);
      });
    
});

