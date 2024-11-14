
// const mysql = require('mysql');
import express from 'express'
// const cors = require('cors')
// app.use(cors())


import { createConnection } from "mysql";
var con = createConnection({
host: "localhost",
user: "root",
password: null,
database: "bitewise",
});

// con.connect(function (err) {
//     if (err) {
//         console.log('Error connecting to Db');
//         return;
//     }
//     console.log('Connection established');
// });


app.post('/bitewise',(req,res)=>{
 const sql = "INSERT INTO user_table('email','firstName','lastName','password') VALUES(?)";
 const values =[
    req.body.email,
    req.body.firstName,
    req.body.lastName,
    req.body.password

 ]
 db.query(sql,[values],(error,data) =>{
    if(err){
        return res.json('Error')
    }
    return res.json(data);
 })
})

app.listen(8081,()=>{
    console.log('listening')
})