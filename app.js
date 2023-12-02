require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes/defaultroutes');

//Environment variables
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public/'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    mongoose.connect(process.env.DBSTRING, {dbname: process.env.DBNAME})
        .then(result => {
            result.connections.forEach(connection => {
                    console.log(`connected to DB: ${connection.name}`)
            });
        })
        .catch(error => {
            console.log('problems connecting to DB\n', error.message)

        })
        console.log(`Server running on port ${PORT}\nopen http://localhost:${PORT} to view the page`)
    });