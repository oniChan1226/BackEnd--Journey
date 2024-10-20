console.log("Hello")

require('dotenv').config();

const express = require('express')
// Both are same
// import express from "express"

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/twitter', (req, res) => {
    res.send("Fahad Khan");
})

app.get('/login', (req, res) => {
    res.send("<h1>Please login</h1>");
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})