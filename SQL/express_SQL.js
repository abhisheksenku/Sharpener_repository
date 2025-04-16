const express = require('express');
const mysql = require('mysql2');
const app = express();
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Abhi@211724',
    database:'testingdb'
})
connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Connection has been created");
})
const creationQuery = `create table Students(
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        name VARCHAR(20),
                        EMAIL varchar(20)
)`
connection.execute(creationQuery,(err)=>{
    if(err){
        console.log(err);
        connection.end();
        return;
    }
    console.log("Table is created");
})
app.get('/',(req,res)=>{
    res.send("Hello");
})
app.listen(3000,()=>{
    console.log('Server is created')
})
