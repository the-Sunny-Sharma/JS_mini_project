const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const fs = require("fs");
const { Connection } = require("mysql2/typings/mysql/lib/Connection");

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "abc123",
    database : "webharvest"
});


// Connect to the MySQL server
Connection.connect(err => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
    } else {
      console.log('Connected to MySQL');
    }
  });

app.post("/save", (req, res) => {
    let data = [req.body.sr, req.body.imageData, req.body.prod_name, req.body.prod_desc, req.body.price, req.body.seg, req.body.unit_seg, req.body.tot_qty, req.body.unit_tot_qty];
    let sql = "insert into product values(?,?,?,?,?,?,?,?,?)"; 
    con.query(sql, data, (err, result) => {
        if(err)
            return res.send(err);
        else
            return res.send(result);
    })
})

app.post("/getdata",(req,res) => {
    let sql = "select * from product";
    con.query(sql, (err, result) => {
        if(err)
            return res.send(err);
        else
            return res.send(result);
    });
});

app.listen(9000, () => { console.log("ready to serve @ 9000");});