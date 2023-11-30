const express = require("express")
const app = express()
const routes = require('./routes/defaultroutes');

//Environment variables
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public/'));
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}\nopen http://localhost:${PORT} to view the page`)
})