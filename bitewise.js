import mysql from 'mysql'
import express from 'express';
import cors from 'cors';

const app= express();
app.use(cors())
app.use(express.json())

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
 db.query(sql,[values],(err,data) =>{
    if(err){
        return res.json('Error')
    }
    return res.json(data);
 })
})
const port =8081;
app.listen(8081,()=>{
    console.log('listening')
})