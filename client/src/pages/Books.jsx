import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

//import { Link, NavLink } from 'react-router-dom'
//import { BrowserRouter, Routes, Route } from "react-router-dom";

const Books = () => {
    const [book, setBooks] = useState([])

    useEffect(()=>{
        const fecthAllBooks = async ()=>{
            try {
                const res = await axios.get("http://localhost:8800/book")
                setBooks(res.data);
            } catch (err) {
                console.log(err)
            }
        }
        fecthAllBooks()
    },[])

  return (
    <div>
        <h1>Suntana book shop</h1>
        <div className="books">
            {book.map(book=> (
            <div class="row">
            <div class="column"></div>
            <div class="column"></div>
          </div> 
            ))}
        </div>
        <button><Link to="/add">Add New</Link></button>
    </div>
  )
}

export default Books