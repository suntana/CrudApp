import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express()
app.use(express.json())
app.use(cors())

//Config connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password :"",
    database : "books"
})

app.get("/", (req,res)=>{
    res.json("Success")
    })

//Query get data form Mysql
app.get("/book", (req,res)=>{
    const q = "SELECT * FROM book"
    db.query(q, (err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

//Query insert data to Mysql
app.post("/book", (req,res)=>{
    const q = "INSERT INTO book ('id`, `nama`, `email`, `gambar`) VALUES (?)"
    const VALUES = ("id","nama", "email", "gambar")

    db.query(q,[VALUES], (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

//Test node listen
app.listen(8800,()=>{
    console.log("Connected Success....")
})