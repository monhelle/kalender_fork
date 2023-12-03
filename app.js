require('dotenv').config();
const express = require("express");
const {connectToDB} = require('./handlers/dbhandler');
const app = express();
const routes = require('./routes/defaultroutes');

//Environment variables
const PORT = process.env.PORT || 3000;
const dbname = process.env.DBNAME;
const dbstring = process.env.DBSTRING;


app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public/'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    connectToDB(dbstring, dbname);
    console.log(`Server running on port ${PORT}\nopen http://localhost:${PORT} to view the page`);
    if(process.env.DEBUG == true) {
        console.log('WARNING! CURRENTLY IN DEBUG MODE!');
    }
});